const initialState = "easy";

const changeDifficultySolo = (state = initialState, action) => {
  switch (action.type) {
    case "CURRDIFFICULTYSOLO":
      return action.difficulty;
    default:
      return state;
  }
};

export default changeDifficultySolo;
