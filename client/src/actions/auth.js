import axios from 'axios';
import { ADMIN_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
import setAuthToken from '../utils/setAuthToken';
//import api from '../utils/api'

//load admin
export const loadAdmin = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token);
        //console.log("token: ", localStorage.token);
    }

    try {
        const res = await axios.get("/auth/");
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
    //console.log("auth/actions body : ", body);

    //try {

        var request = {
            method: 'post',
            url: '/auth/adminLogin',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : JSON.stringify(body)
          };
        
          axios(request)
          .then(function (response) {
            console.log(".then working");
            
          })
          .catch(function (err) {
            const errors = err.response.data.errors;
            let errMsg = '';
            errors?.forEach(error => errMsg = (error.msg));
            console.log("catch err");
            dispatch({
                type: LOGIN_FAIL,
                errMsg: errMsg
            });
          });


        //const res = await axios.post("/auth/adminLogin", body);
    //     console.log("auth/actions: ", res.data);
    //     dispatch({
    //         type: LOGIN_SUCCESS,
    //         payload: res.data
    //     });
        
    //     dispatch(loadAdmin());
        
    // } catch(err) {
    //     const errors = err.response.data.errors;
    //     let errMsg = '';
    //     errors?.forEach(error => errMsg = (error.msg));
    //     dispatch({
    //         type: LOGIN_FAIL,
    //         errMsg: errMsg
    //     });
    // }


}


//logout
export const logout = () => dispatch => {
    dispatch({ type: LOGOUT });
}


