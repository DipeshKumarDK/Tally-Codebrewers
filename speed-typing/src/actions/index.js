export const changeDuration = (expense) => {
    return{
        type:"CURRDURATION",
        expense:expense
    }
}

export const changeUser = (user) => {
    return{
        type:"CURRUSER",
        user:user
    }
}
