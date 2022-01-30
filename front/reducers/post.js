export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src : 'http://placehold.it/320x320.png/000/ffffff?text=1'
        }, {
            src : 'http://placehold.it/320x320.png/000/ffffff?text=2'
        }, {
            src : 'http://placehold.it/320x320.png/000/ffffff?text=3'
        }],
        Comments: [{
            User: {
                nickname: 'nero'
            },
            content: '우와 개정판이 나왔군요~'
        }, {
            User: {
                nickname: 'hero'
            },
            content: '얼른 사고싶어요~'
        }]
    }],
    ImagePaths: [],
    postAdded: false
}

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST :
            return{
                ...state,
                mainPosts: [
                    dummyPost,
                    ...state.mainPosts
                ],
                postAdded: true
            }
        default : 
            return state;
    }
}

export default reducer;