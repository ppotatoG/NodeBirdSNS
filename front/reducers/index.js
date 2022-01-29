import { HYDRATE } from "next-redux-wrapper";

const initialState = {
    user : {
        isLoggedIn : false,
        user : null,
        signUpData : {},
        loginData : {}
    },
    post : {
        mainPosts: []
    }
};

export const loginAction = (data) => {
    return {
        type : 'LOG_IN',
        data
    }
}

export const logoutAction = () => {
    return {
        type : 'LOG_OUT'
    }
}

const changeNickname = (data) => {
    return  {
        type : 'CHANGE_NICKNAME',
        data
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case HYDRATE :
            return {
                ...state,
                ...action.payload
            }
        case 'LOG_IN' : 
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn: true,
                    user : action.data
                }
            }
        case 'LOG_OUT' : 
            return {
                ...state,
                user : {
                    ...state.user,
                    isLoggedIn: false,
                    user : null
                }
            }
        default : 
            return state;
    }
};

export default rootReducer;