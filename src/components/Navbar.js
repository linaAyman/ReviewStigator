import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import {BsPieChartFill} from 'react-icons/bs';
import { FaBars,FaTimes,FaHom } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib'

import dtctv1 from '../Logos/dtctv1.png';
// import dtctv1 from 'D:/frontend/react-website-10-6/public/images/dtctv4.png';
function Navbar() {
const [click, setClick] = useState(false); //state for the click
const [button, setButton] = useState(true); //state for the button

// const[homeActive,setHomeActive]=useState(true); //highlight the active navbar item
// const[agenciesActive,setAgenciesActive]=useState(false);
// const[aboutActive,setAboutActive]=useState(false);
// const[contactActive,setContactActive]=useState(false);

const handleClick = () =>setClick(!click); //function to toggle the click of hamburger menu
const closeMobileMenu =() =>setClick(false); //disables the menu in mobile once clicking on an item

//handling active pages and closing mobile menu
const deactivatePages = (page) => {
    setClick(false);
    // if(page=='home'){
    //     setHomeActive(true);
    //     setAboutActive(false);
    //     setAgenciesActive(false);
    //     setContactActive(false);
    // }else if(page=='agencies'){
    //     setAgenciesActive(true);
    //     setAboutActive(false);
    //     setHomeActive(false);
    //     setContactActive(false);
    // }else if (page=='aboutus'){
    //     setAboutActive(true);
    //     setHomeActive(false);
    //     setAgenciesActive(false);
    //     setContactActive(false);
    // }else if (page=='contactus'){
    //     setAboutActive(false);
    //     setHomeActive(false);
    //     setAgenciesActive(false);
    //     setContactActive(true);
    // }
}

const showButton =() => {
    if(window.innerWidth<= 960) { //if the window size is small hide the button
        setButton(false)
    }else{
        setButton(true) //else show it
    }
}

window.addEventListener('resize',showButton); //trigger the showButton function on the window resize

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}></IconContext.Provider> {/*global styling*/}
        <div className="navbar">
            {/* <div>
            <img width="96" height="65" src={process.env.PUBLIC_URL + '/images/InvLogo.png'} /> 
            </div> */}
            <div className="navbar-container container"> 
                <Link  onClick={deactivatePages.bind(this,'home')} to='/' className="navbar-logo">
                    <img  className='navbar-icon' src={dtctv1} />
                    
                    {/* <BsPieChartFill className="navbar-icon" /> */}
                    {/* <img className="navbar-icon" width="60" height="55" src={process.env.PUBLIC_URL + '/images/SphereLogo.png'} /> */}
                    <p>ReviewStigator</p> 
                </Link>
                
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink  activeClassName="nav-links-active" onClick={deactivatePages.bind(this,'home')} exact to='/' className="nav-links" >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-links-active" onClick={deactivatePages.bind(this,'agencies')} to='/agencies' className="nav-links">
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-links-active" onClick={deactivatePages.bind(this,'compare')} to='/compare'className="nav-links">
                            Compare products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="nav-links-active" onClick={deactivatePages.bind(this,'reviewtest')} to='/reviewtest'className="nav-links">
                            Test a review
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink activeClassName="nav-links-active" onClick={deactivatePages.bind(this,'contactus')} to='/contactus'className="nav-links">
                            Contact Us
                        </NavLink>
                    </li> */}
                    {/* 
                    <li className="nav-btn">
                        {button ? (
                            <Link to='/sign-up' className="btn-link">
                                <Button buttonStyle='btn--outline'>Contact Us</Button>
                            </Link>
                        ) : (
                            <Link onClick={closeMobileMenu} to='/contact-us' className="btn-link">
                                <Button  buttonStyle='btn--outline'
                                buttonSize='btn--mobile'>
                                    Contact us</Button>
                            </Link>
                        )}
                    </li>
                    */}
                    
                </ul>
            </div>
        </div>
        </>
    );
}

export default Navbar
