//action
 export const increment = (num) => {
    return{
        type:"INCREMENT",
        payload:num
    }
}

export const decrement = (num) => {
    return{
        type:"DECREMENT",
        payload:num
    }
}
export const addToCard = (price) => {
    return{
        type: "ADDTOCARD",
        payload: price,
    }
}
