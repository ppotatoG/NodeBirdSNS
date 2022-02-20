import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';
import { 
    LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, 
    LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, 
    SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} 
from '../reducers/user';

function logInAPI(data) {
    return axios.post('/apl/login', data);
}

function* logIn(action) {
    try {
        // const result = yield call(loginAPI, action.data);
        console.log('saga login');

        yield delay(2000);

        yield put({
            type : LOG_IN_SUCCESS,
            data : action.data
        });
    } catch (err) {
        yield put({
            type : LOG_IN_FAILURE,
            error : err.response.data
        })
    }
}

function logOutAPI() {
    return axios.post('/apl/logout');
}

function* logOut(action) {
    try {
        // const result = yield call(logoutAPI);

        yield delay(2000);

        yield put({
            type: LOG_OUT_SUCCESS,
            data: action.data
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data
        })
    }
}

function signUpAPI() {
    return axios.post('/apl/logout');
}

function* singinUp(action) {
    try {
        // const result = yield call(signUpAPI);

        yield delay(2000);

        yield put({
            type: SIGN_UP_SUCCESS
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data
        })
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, logOut);
}

export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp)
    ])
}