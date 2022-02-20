export const initialState = {
    logInLoading : false, // 로그인
    logInDone : false,
    logInError : null,

    logOutLoading : false, // 로그아웃
    logOutDone : false,
    logOutError : null,

    signUpLoading : false, // 회원가입
    signUpDone : false,
    signUpError : null,

    changeNicknameLoading : false, // 닉네임 변경
    changeNicknameDone : false,
    changeNicknameError : null,    

    me : null,
    signUpData : {},
    loginData : {}
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST'; 
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS'; 
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE'; 

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST'; 
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'; 
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'; 

export const FOLLW_REQUEST = 'FOLLW_REQUEST'; 
export const FOLLW_SUCCESS = 'FOLLW_SUCCESS'; 
export const FOLLW_FAILURE = 'FOLLW_FAILURE'; 

export const UNFOLLW_REQUEST = 'UNFOLLW_REQUEST'; 
export const UNFOLLW_SUCCESS = 'UNFOLLW_SUCCESS'; 
export const UNFOLLW_FAILURE = 'UNFOLLW_FAILURE'; 

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST'; 
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS'; 
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE'; 

const dummyUser = (data) => ({
    ...data,
    nickname : '제로초',
    id : 1,
    Posts: [],
    Followings: [],
    Followers: []

});

export const loginRequestAction = (data) => {
    return {
        type : LOG_IN_REQUEST,
        data
    };
};

export const logoutRequestAction = () => {
    return {
        type : LOG_OUT_REQUEST,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST : 
            return {
                ...state ,
                logInLoading : true, 
                logInError : null,
                logInDone : false,
            };
            
        case LOG_IN_SUCCESS : 
            return {
                ...state,
                logInLoading : false,
                logInDone: true,
                me : dummyUser(action.data)
            };

        case LOG_IN_FAILURE : 
            return {
                ...state,
                logInLoading : false,
                logInError: action.error
            };

        case LOG_OUT_REQUEST : 
            return {
                ...state ,
                logOutLoading : true, 
                logOutDone : false,
                logOutError : null,
            };
            
        case LOG_OUT_SUCCESS : 
            return {
                ...state,
                logOutLoading : false,
                logOutDone: true,
                me : null
            };

        case LOG_OUT_FAILURE : 
            return {
                ...state,
                logOutLoading : false,
                logOutError: action.error
            };

        case SIGN_UP_REQUEST : 
            return {
                ...state ,
                signUpLoading : true, 
                signUpDone : false,
                signUpError : null,
            };
            
        case SIGN_UP_SUCCESS : 
            return {
                ...state,
                signUpLoading : false,
                signUpDone: true
            };

        case SIGN_UP_FAILURE : 
            return {
                ...state,
                signUpLoading : false,
                signUpError: action.error
            };
            
        case CHANGE_NICKNAME_REQUEST : 
            return {
                ...state ,
                changeNicknameLoading : true, 
                changeNicknameDone : false,
                changeNicknameError : null,
            };
        
        case CHANGE_NICKNAME_SUCCESS : 
            return {
                ...state,
                changeNicknameLoading : false,
                changeNicknameDone: true
            };

        case CHANGE_NICKNAME_FAILURE : 
            return {
                ...state,
                changeNicknameLoading : false,
                changeNicknameError: action.error
            };

        default : 
            return state;
    }
}

export default reducer;