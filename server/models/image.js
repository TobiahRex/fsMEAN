const mongoose = require('mongoose');
const uuid = require('uuid');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();
const bucketName = process.env.AWS_BUCKET;
const imageSchema = new mongoose.Schema({
  url: { type: String },
  name: { type: String },
  key: { type: String },
});
const Image = mongoose.model('Image', imageSchema);

console.log('s3: ', s3.delteObject);
imageSchema.statics.getAllImages = (cb) => {
  const params = { Bucket: bucketName };
  s3.listObjectsV2(params, cb);
};


imageSchema.statics.removeImage = (imgKey, cb) => {
  if (!imgKey) return cb({ Error: 'Did not provide required Image Data.' });
  Image.getAllImages((err1, result) => {
    if (err1) return cb(err1);
    const s3Key = result.Contents.map((image) => {
      if (image.Key === imgKey) return image;
      return null;
    });
    const params = {
      Bucket: bucketName,
      Key: s3Key,
    };
    s3.deleteObject(params, (err2, result) => {
      if (err2) return cb(err2);
      cb(null, result);
    })
  });
}


imageSchema.statics.upload = (file, cb) => {
  console.log('file.buffer: ', file.buffer, '\nfileoriginalName: ', file.originalname, '\nfile.mimetype: ', file.mimetype);
  if (!file.mimetype.match(/image/)) {
    return cb({ error: 'File must be an image.' });
  }

  const filenameParts = file.originalname.split('.');
  const urlBase = 'https://s3.amazonaws.com/';
  let ext = '';
  if (filenameParts.length > 1) {
    ext = `.${filenameParts.pop()}`;
  } else {
    ext = '';
  }

  const key = `${uuid()}${ext}`;

  const params = {
    Bucket: bucketName,
    Key: key,
    ACL: 'public-read',
    Body: file.buffer,
  };

  return s3.putObject(params, (err, result) => {
    if (err) return cb(err);

    const imgUrl = `${urlBase}${bucketName}/${key}`;

    return Image.create({
      url: imgUrl,
      name: file.originalname,
    }, cb);
  });
};

module.exports = Image;
