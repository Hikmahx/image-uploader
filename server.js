const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

// File Upload
app.use(fileUpload())

// Upload Endpoint
app.post('/upload', (req, res)=>{
  if(req.files ===null){

    // Bad Code
    return res.status(400).json({msg: 'No file uploaded'})
  }

  // .file is gotten from react 
  const file = req.files.file

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err=>{
    if(err){
      console.log(err)
      // Server error
      return res.status(500).send(err)
    }

    res.status(200).json({fileName: file.name, filePath: `/uploads/${file.name}`})
  })
})


const PORT = 5000; 

app.listen(PORT, ()=>{console.log('This is running on PORT: ' + PORT)})