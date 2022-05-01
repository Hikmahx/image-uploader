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
    case "DRAG_OVER":
      return{
        ...state,
        dragOver: true
      };
    case "DRAG_LEAVE":
      return{
        ...state,
        dragOver: false
      };
    default:
      return state;
  }
};

export default UploadReducer;
