import { AUTH_ERROR, ADMIN_LOADED, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    admin: null,
    error: null
}


export default function authentication(state = initialState, action) {
    const {type, payload, errMsg} = action;

    switch(type) {
        case ADMIN_LOADED: 
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                admin: payload,
                error: null
            };
        
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:            
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                admin: null,
                error: errMsg
            };
        
        case LOGIN_SUCCESS:             
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading:false,
                error: null

            };
        

        default:
            return state;
    }
}


