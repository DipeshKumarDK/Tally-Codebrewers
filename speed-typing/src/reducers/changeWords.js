const initialState = "";

const changeWords = (state = initialState, action) => {
  switch (action.type) {
    case "CURRWORDS":
      return action.words;
    default:
      return state;
  }
};

export default changeWords;
