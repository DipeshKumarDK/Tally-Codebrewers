const initialState = null;

const changeSearchId = (state = initialState, action) => {
  switch (action.type) {
    case "CURRID":
      return action.id;
    default:
      return state;
  }
};

export default changeSearchId;