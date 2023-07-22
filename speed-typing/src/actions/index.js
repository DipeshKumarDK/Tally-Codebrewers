export const changeDuration = (expense) => {
  return {
    type: "CURRDURATION",
    expense: expense,
  };
};

export const changeUser = (user) => {
  return {
    type: "CURRUSER",
    user: user,
  };
};

export const changeDifficultySolo = (difficulty) => {
  return {
    type: "CURRDIFFICULTYSOLO",
    difficulty: difficulty,
  };
};

export const changeWords = (words) => {
  return {
    type: "CURRWORDS",
    words: words,
  };
};
