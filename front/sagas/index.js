import { all, fork, call, take, put } from 'redux-saga/effects';
import axios from 'axios';

function loginAPI(data) {
    return axios.post('apl/login', data);
}

function* logIn(action) {
    try {
        const result = yield call(loginAPI, action.data);

        yield put({
            type: 'LOG_IN_SUCCES',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        })
    }
}

function logoutAPI() {
    return axios.post('apl/logout');
}

function* logOut() {
    try {
        const result = yield call(logoutAPI);

        yield put({
            type: 'LOG_OUT_SUCCES',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        })
    }
}

function addPostAPI(data) {
    return axios.post('apl/post', data);
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);

        yield put({
            type: 'ADD_POST_SUCCES',
            data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data
        })
    }
}

function* watchLogIn() {
    yield take('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield take('LOG_OUT_REQUEST', logOut);
}

function* watAddPost() {
    yield take('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all ([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watAddPost),
    ]);
}