const UploadReducer = (state, action) => {
  switch (action.type) {
    case "SET_FILENAME":
      return {
        ...state,
        filename: action.payload,
      };
    case "UPLOAD_FILE":
      return {
        ...state,
        uploadedFile: action.payload,
      };
    default:
      return state;
  }
};

export default UploadReducer;
