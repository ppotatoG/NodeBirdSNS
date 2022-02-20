import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src : 'https://placeimg.com/320/320/animals'
        }, {
            src : 'https://placeimg.com/320/320/arch'
        }, {
            src : 'https://placeimg.com/320/320/nature'
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
    ImagePaths : [],
    addPostLoading : false,
    addPostDone : false,
    addPostError : false,
    addCommentLoading : false,
    addCommentDone : false,
    addCommentError : false
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
});

const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제로초'
    },
    Images: [],
    Comments: []
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST :
            return {
                ...state,
                addPostLoading : true,
                addPostDone : false,
                addPostError : null,
            }
        case ADD_POST_SUCCESS :
            return {
                ...state,
                mainPosts: [
                    dummyPost(action.data),
                    ...state.mainPosts
                ],
                addPostLoading : false,
                addPostDone : true
            };
        case ADD_POST_FAILURE :
            return {
                addPostLoading : false,
                addPostError : action.error
            };

        case ADD_COMMENT_REQUEST :
            return {
                ...state,
                addCommentLoading : true,
                addCommentDone : false,
                addCommentError : null,
            };
        case ADD_COMMENT_SUCCESS :
            const postIndex = staet.mainPosts.findIndex((val) => val.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const commemts = [dummyComment(action.data.content), ...post.Comments];
            const mainPosts = [...state.mainPosts];

            return {
                ...state,
                mainComments: [
                    dummyComment,
                    ...state.mainComments
                ],
                addCommentLoading : true,
                addCommentDone : true
            };
        case ADD_COMMENT_FAILURE :
            return {
                addCommentLoading : false,
                addCommentError : action.error
            };

        default : 
            return state;
    }
};

export default reducer;