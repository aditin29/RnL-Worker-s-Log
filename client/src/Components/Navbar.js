import React from "react";
import "./Navbar.css";
import { Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../actions/auth";

const Navbar = ({auth: {isAuthenticated, loading}, logout}) => {

    const history = useHistory();


    function handleLogout(e) {
        e.preventDefault();
        logout();
        if(!loading && !isAuthenticated) {
            history.push('/login');
        }
    }


    return (
        <div className = "navbar">

            <div className="navbar__title"> 
                <div className="logo-dash"></div>
                <Link to='/' className="nav__title" >
                    Rocks & Logs
                </Link>               
                               
            </div>



            <div className="navbar__right"> 
                <div className="nav__eles" >
                    <Link to='/' className="nav__ele"  ><h2>Home</h2></Link>

                    <Link to='/add-site' className="nav__ele"  ><h2>Sites</h2></Link>

                    <Link to='/workers' className="nav__ele"  ><h2>Workers</h2></Link>     

                    <Link to='/monthly-report' className="nav__ele"  ><h2>Monthly Report</h2></Link> 
                </div>
            
                                             
                
                <button onClick={handleLogout} className="nav__link">
                    <h2>Logout</h2>
                </button>
                    
            </div>
        </div>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logout})(Navbar);