import React from 'react'
import imageUpload from '../assets/image-upload.svg'

const FileUpload = () => {
  return (
    <div className="bg-white w-full max-w-xl px-8 py-9 m-4 min-h-xl flex flex-col items-center rounded-xl shadow-xl">
    <form className="w-full">
      <div className="upload-wrapper flex flex-col items-center">
        <h1 className="text-dark-gray text-lg mb-4">
          Upload your image
        </h1>
        <h2 className="text-xs text-gray mb-6">
          File should be Jpeg, Png,...
        </h2>
        <div className="w-full h-56 p-6 rounded-lg bg-grayish-blue border-2 border-dashed border-pale-blue-border flex flex-col items-center">
          <div className="img-wrapper w-2/5 mb-5">
            <img src={imageUpload} alt="upload" className="w-full" />
          </div>
          <div className="text-light-gray text-xs">
            Drag & Drop yout image here
          </div>
        </div>
        <div className="text-light-gray m-6 text-xs">
          Or
        </div>
        <button className="bg-blue text-white px-4 h-8 rounded-md text-xs hover:border-blue hover:border-1 hover:bg-white hover:text-blue transition-all">Choose a file</button>
      </div>
    </form>
    </div>
  )
}

export default FileUpload