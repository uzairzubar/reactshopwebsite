const cartValues = {
    totalPrize:0,
    totalQuantity:0,
    products:[]
}

export const addToCard = (state=cartValues,action) => {
    switch (action.type) {
        case "ADDTOCARD":
            return {
                totalPrize: state.totalPrize + action.payload.price,
                totalQuantity: state.totalQuantity + 1,
                products: state.products.concat(action.payload)
            }

        default:
            return state;

    }
}