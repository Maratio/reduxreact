
// const action = { type: '', payload: '?' }


const defaultState = {
    count: 0,
}

const INCREMENT = 'INCREMENT'
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT'
const DECREMENT = 'DECREMENT'
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT'


export const countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            return state

    }
}

export const incCreator = () => ({type: INCREMENT})
export const asyncIncCreator = () => ({type: ASYNC_INCREMENT})
export const decCreator = () => ({type: DECREMENT})
export const asyncDecCreator = () => ({type: ASYNC_DECREMENT})

