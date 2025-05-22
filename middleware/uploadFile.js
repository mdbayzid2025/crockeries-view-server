const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { ALLOW_FILE_TYPES, MAX_FILE_SIZE } = require("../config");

const getUploadDirectory = (type) => {
  return path.join(__dirname, `../public/images/${type}`);
};

const generateMulter = (type = "users") => {
  const uploadPath = getUploadDirectory(type);

  // Make directory if not exists
  if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const extname = path.extname(file.originalname);
      cb(null, Date.now() + '-' + file.originalname.replace(extname, '') + extname);
    },
  });

  const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).substring(1);
    if (!ALLOW_FILE_TYPES.includes(ext)) {
      return cb(new Error("File type not allowed"), false);
    }
    cb(null, true);
  };

  return multer({
    storage,
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter,
  });
};

module.exports = generateMulter;



/*
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { ALLOW_FILE_TYPES, MAX_FILE_SIZE } = require("../config");

const makeUpload = (folderName) => {
  const UPLOAD_DIR = path.join(__dirname, `../public/images/${folderName}`);

  // Ensure the folder exists
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
      const extname = path.extname(file.originalname);
      cb(null, Date.now() + '-' + file.originalname.replace(extname, '') + extname);
    },
  });

  const fileFilter = (req, file, cb) => {
    const extname = path.extname(file.originalname);
    if (!ALLOW_FILE_TYPES.includes(extname.substring(1))) {
      return cb(new Error('File type not allowed'), false);
    }
    cb(null, true);
  };

  return multer({
    storage: storage,
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter,
  });
};

module.exports = makeUpload;

*/