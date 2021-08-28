import axios from 'axios';
import { ADMIN_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
//import setAuthToken from '../utils/setAuthToken';
//import api from '../utils/api'

//load admin
export const loadAdmin = () => async dispatch => {
    // if(localStorage.token) {
    //     setAuthToken(localStorage.token);
    // }

    try {
        const res = await axios.get(`${process.env.REACT_APP_BASEURL}/auth`);

        dispatch({
            type: ADMIN_LOADED,
            payload: res.data
        })
    } catch(err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
} 

//login admin
export const login = (Name, Password) => async dispatch => {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // };

    const body = {Name, Password};

    try {
        const res = await axios.post(`${process.env.REACT_APP_BASEURL}/auth/adminLogin`, body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        
        dispatch(loadAdmin());
        
    } catch(err) {
        const errors = err.response.data.errors;
        let errMsg = '';
        errors?.forEach(error => errMsg = (error.msg));
        dispatch({
            type: LOGIN_FAIL,
            errMsg: errMsg
        });
    }


}


//logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}


