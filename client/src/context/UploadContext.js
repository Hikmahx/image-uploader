
import { createContext, useReducer } from "react";
import axios from "axios";
import UploadReducer from "./UploadReducer";


const UploadContext = createContext();

export const UploadProvider = ({ children }) => {

    const initialState = {
      uploadedFile: {},
      filename: "Drag & Drop your image here",
    };

    const [state, dispatch] = useReducer(UploadReducer, initialState)

  const onChange = (e) => {
    e.preventDefault();

    fileUpload(e.target.files[0]);
  };

  const onDrop = (acceptedFiles) => {
    fileUpload(acceptedFiles[0])
  };

  const fileUpload = async (fileItem) => {
    const formData = new FormData();
    formData.append("file", fileItem);

    console.log("form submitted");

    try {
      const res = await axios.post("/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: "UPLOAD_FILE",
        payload: res.data,
      });

      dispatch({
        type: "SET_FILENAME",
        payload: fileItem.name,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UploadContext.Provider
      value={{
        filename: state.filename,
        uploadedFile: state.uploadedFile,
        onChange,
        onDrop,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};

export default UploadContext;
