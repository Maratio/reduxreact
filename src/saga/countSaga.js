import { put, takeEvery } from 'redux-saga/effects'
import { ASYNC_DECREMENT, ASYNC_INCREMENT, decCreator, incCreator } from '../store/countReducer'

const delay = (ms) => new Promise(
// () => setTimeout(() => {}, ms)
(res) => setTimeout(res, ms)
)

function* incWorker(){
    yield delay(1000)
    yield put(incCreator())
}

function* decWorker(){
    yield delay(1000)
    yield put(decCreator())
}


export function* countWatcher(){
    yield takeEvery(ASYNC_INCREMENT,incWorker )
    yield takeEvery(ASYNC_DECREMENT,decWorker )
}