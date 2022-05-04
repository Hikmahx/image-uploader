import React from 'react'

const FileProgress = () => {
  return (
    <div className="bg-white w-full max-w-xl px-8 py-9 m-4 h-36 flex flex-col items-center rounded-xl shadow-xl">
      <div className="w-full">
        <h3 className="">Uploading...</h3>
        <div className="h-2 bg-gray-progress-bar rounded-full mt-5 relative overflow-hidden" role="progressbar">
          <div className="percentage absolute left-0 w-4 h-2 bg-blue"></div>
        </div>
      </div>
    </div>
  );
}

export default FileProgress