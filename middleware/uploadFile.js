const multer = require("multer");
const path = require("path");
const { UPLOAD_USER_IMG_DIRECTORY, ALLOW_FILE_TYPES, MAX_FILE_SIZE } = require("../config");





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_USER_IMG_DIRECTORY)
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
 const extname = path.extname(file.originalname);
    cb(null, Date.now() + '-' + file.originalname.replace(extname, '') + extname);
  }
})

const fileFilter = (req, file, cb)=>{
       const extname = path.extname(file.originalname);
    if(!ALLOW_FILE_TYPES.includes(extname.substring(1))){
        return cb(new Error('File type not allowed'), false);
    }
    cb(null, true);
}

const upload = multer({ 
    storage: storage,
    limits: {fileSize: MAX_FILE_SIZE},
    fileFilter
});

module.exports = upload;