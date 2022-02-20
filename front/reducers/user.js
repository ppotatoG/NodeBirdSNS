export const initialState = {
    isLoggingIn: false,
    isLoggedIn : false,
    isLoggingOut: false,
    me : null,
    signUpData : {},
    loginData : {}
};

export const loginRequestAction = (data) => {
    return {
        type : 'LOG_IN_REQUEST',
        data
    };
};

// export const loginSuccessAction = (data) => {
//     return {
//         type : 'LOG_IN_SUCCESS',
//         data
//     };
// };

// export const loginFailureAction = (data) => {
//     return {
//         type : 'LOG_IN_FAILURE',
//         data
//     };
// };

export const logoutRequestAction = (data) => {
    return {
        type : 'LOG_OUT_REQUEST',
        data
    };
};

// export const logoutSuccessAction = (data) => {
//     return {
//         type : 'LOG_OUT_SUCCESS',
//         data
//     };
// };

// export const logoutFailureAction = (data) => {
//     return {
//         type : 'LOG_OUT_FAILURE',
//         data
//     };
// };

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOG_IN_REQUEST' : 
        console.log('reducer login');
            return {
                ...state,
                isLoggedIn: true
            };
            
        case 'LOG_IN_SUCCESS' : 
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me : { ...action.data, nickname: 'zorocho' }
            };

        case 'LOG_IN_FAILURE' : 
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false
            };

        case 'LOG_OUT_REQUEST' : 
            return {
                ...state,
                isLoggingOut: true
            };
            
        case 'LOG_OUT_SUCCESS' : 
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me : null
            };

        case 'LOG_OUT_FAILURE' : 
            return {
                ...state,
                isLoggingOut: false
            };

        default : 
            return state;
    }
}

export default reducer;