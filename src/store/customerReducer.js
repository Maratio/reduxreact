
const defaultState = {
    customer: [],

}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CASTOMER":
            return { ...state, customer: [...state.customer, ...action.payload] }
        case "GET_CASTOMER":
            return { ...state }
        default:
            return state

    }
}
