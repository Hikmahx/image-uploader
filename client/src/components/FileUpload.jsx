import React, { useContext } from "react";
import imageUpload from "../assets/image-upload.svg";
import UploadContext from "../context/UploadContext";
import Dropzone from "react-dropzone";

const FileUpload = () => {
  const { filename, uploadedFile, onChange, onDrop, onDragEnter, onDragLeave, dragOver } = useContext(UploadContext);

  return (
    <div className="bg-white w-full max-w-xl px-8 py-9 m-4 min-h-xl flex flex-col items-center rounded-xl shadow-xl">
      <div className="w-full">
        <div className="upload-wrapper flex flex-col items-center">
          <h1 className="text-dark-gray text-lg mb-4">Upload your image</h1>
          <h2 className="text-xs text-gray mb-6">
            File should be Jpeg, Png,...
          </h2>
          <Dropzone
            multiple={false}
            onDrop={onDrop}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
          >
            {({ getRootProps, getInputProps }) => (
              <div
                {...getRootProps({
                  className:
                    "w-full h-56 p-6 rounded-lg bg-grayish-blue border-2 border-dashed border-pale-blue-border flex flex-col items-center realtive " +
                      (dragOver && "!border-solid opacity-70"),
                })}
              >
                <input {...getInputProps()} />
                <div className="img-wrapper w-2/5 mb-5">
                  <img src={imageUpload} alt="upload" className="w-full" />
                </div>
                <div className="text-light-gray text-xs">{filename}</div>
              </div>
            )}
          </Dropzone>
          <div className="text-light-gray m-6 text-xs">Or</div>
          <div className="bg-blue text-white px-4 h-8 relative rounded-md text-xs flex items-center justify-center cursor-pointer hover:border-blue hover:border-1 hover:bg-white hover:text-blue transition-all">
            <p className="m-auto">Choose a file</p>
            <input
              type="file"
              name="file"
              className="opacity-0 absolute inset-0 cursor-pointer"
              id="fileUpload"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
