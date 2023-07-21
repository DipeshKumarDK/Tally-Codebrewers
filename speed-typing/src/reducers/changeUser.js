var retrievedObject = localStorage.getItem('typo_user');

const initialState = JSON.parse(retrievedObject);

const changeUser = (state = initialState , action) => {
    switch(action.type){
        case "CURRUSER": return action.user;
        default: return state;
    }
}

export default changeUser; 