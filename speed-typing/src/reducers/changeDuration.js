const initialState = 30;

const changeDuration = (state = initialState, action) => {
  switch (action.type) {
    case "CURRDURATION":
      return action.expense;
    default:
      return state;
  }
};

export default changeDuration;
