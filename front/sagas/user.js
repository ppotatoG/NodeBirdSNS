import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';

function logInAPI(data) {
    return axios.post('/apl/login', data);
}

function logOutAPI() {
    return axios.post('/apl/logout');
}

function* logIn(action) {
    try {
        // const result = yield call(loginAPI, action.data);
        console.log('saga login');

        yield delay(2000);

        yield put({
            type: 'LOG_IN_SUCCES',
            data: action.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        })
    }
}

function* logOut(action) {
    try {
        // const result = yield call(logoutAPI);

        yield delay(2000);

        yield put({
            type: 'LOG_OUT_SUCCES',
            data: action.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        })
    }
}

function* watchLogIn() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga(){
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
    ])
}