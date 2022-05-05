import React from 'react'
import successIcon from '../assets/check_circle.svg'

const FileSuccessful = ({uploadedFile}) => {
  return (
    <div className="bg-white w-full max-w-xl px-8 py-9 m-4 min-h-xl flex flex-col items-center rounded-xl shadow-xl">
      <div className="w-full">
        <div className=" flex flex-col items-center">
          <span className="">
            <img src={successIcon} className="m-3" alt="check-icon" />
          </span>
          <h2 className="text-dark-gray mb-4 text-lg">Uploaded Successfully!</h2>
          <div className="img-wrapper bg-light-gray w-full h-56 rounded-md my-4 relative overflow-hidden">
            <img src={'uploads/' + uploadedFile} className="absolute inset-0" alt="upoaded-file" />
          </div>
          <div className="link mt-5 rounded-md w-full h-9 border-1 border-dark-gray-border bg-grayish-blue flex justify-between items-center m-1">
          <div className="text-sm text-dark-gray px-2">http://localhost:5000</div>
          <button className="bg-blue rounded-md text-white px-3 text-xs h-full border-1 border-grayish-blue hover:text-dark-gray">Copy Link</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileSuccessful