const express = require("express");
const multer = require("multer");
// const upload = multer({ dest: __dirname + "/client/public/uploads/" });
// const upload = multer();

const app = express();

const imageStorage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/client/public/uploads`);
  },
  filename: (req, file, cb) => {

    // prefix filename with date
    cb(null, Date.now() + "---" + file.originalname);
  },
});

const upload = multer({ storage: imageStorage });

// Upload Endpoint
app.post('/upload', upload.single("file"), async (req, res) => {
  if (req.file === null) {
    // Bad Code
    return res.status(400).json({ msg: "No file uploaded" });
  }

  // .file is gotten from react (input name="file")
  const file = req.file;
  console.log(file);
  
    return res
      .status(200)
      .json({ fileName: file.filename, filePath: `/uploads/${file.filename}` });


});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("This is running on PORT: " + PORT);
});
