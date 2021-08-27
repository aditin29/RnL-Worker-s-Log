import React, { useState } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
import { Link, Redirect } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

function Login({login, isAuthenticated, errMsg}) {

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    




    function handleName(e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handlePass(e) {
        e.preventDefault();
        setPass(e.target.value);
    }


    function handleLogin(e) {
        e.preventDefault();
        login(name, pass);
        
    }

    if(isAuthenticated) {
        return <Redirect to='/' />
    }


    return (
        <div className="login">

            <div className="navbar__title" style={{position: "absolute", top: "10px", left: "10px"}}> 
                <Link to='/login' className="nav__title" >
                    Rocks & Logs
                </Link>               
                               
            </div>
            <div className="login__container">
                <div className="login__content">
                    <h2>Hello!</h2>

                    <p>Name</p>
                    <input value={name} onChange={handleName} type="text" required />
                    <p>Password</p>
                    <input value={pass} onChange={handlePass} type="password" required />
                    
                    <button onClick={handleLogin} className="login__btn" >Login</button>
                    {errMsg!=null && <Alert style={{marginTop: "10px"}} severity="error">{errMsg}</Alert>}
                    
                </div>
            </div>
            
        </div>
    )
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    errMsg: PropTypes.string
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    errMsg: state.auth.error
})


export default connect(mapStateToProps, {login})(Login);
