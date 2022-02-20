import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';

function addPostAPI(data) {
    return axios.post('apl/post', data);
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data);

        yield delay(1000);

        yield put({
            type: 'ADD_POST_SUCCES',
            // data: result.data
        });
    } catch (err) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: err.response.data
        })
    }
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* userSaga(){
    yield all([
        fork(watchAddPost)
    ])
}
