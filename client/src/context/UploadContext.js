
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

        dispatch({
          type: 'UPLOAD_FILE',
          payload: res.data
        })

        dispatch({
          type: "SET_FILENAME",
          payload: e.target.files[0].name,
        });
      } catch (err) {
        console.log(err);
      }
    };


  return (
    <UploadContext.Provider value={{
      filename: state.filename,
      uploadedFile: state.uploadedFile,
      onChange
    }}>
      {children}
    </UploadContext.Provider>
  ) 
}

export default UploadContext

