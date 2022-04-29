
import { createContext, useState } from "react";
import axios from "axios";


const UploadContext = createContext();

export const UploadProvider = ({ children }) => {
    const [filename, setFilename] = useState("Drag & Drop your image here");
    const [uploadedFile, setUploadedFile] = useState({});

    const onChange = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", e.target.files[0]);

      console.log("form submitted");

      try {
        const res = await axios.post("/upload/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setUploadedFile(res.data);
        setFilename(e.target.files[0].name);
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <UploadContext.Provider value={{
      filename,
      uploadedFile,
      onChange
    }}>
      {children}
    </UploadContext.Provider>
  ) 
}

export default UploadContext

