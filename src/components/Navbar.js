import React from 'react';
import {  FaHome, FaInfoCircle, FaBriefcase, FaCog, FaEnvelope, FaBlog,  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaAlignRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import logo from '../images/p1grey.svg';



const navbar = (props) => {
  return(
    <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            {/* <Link to='/' className='logo'>
             
              <img src={logo} alt='PeterIhimire logo' />
            </Link> */}
            <button
              type='button'
              className='nav-btn'
              // onClick={this.toggleHandler}
              onClick={props.clicked}
            >
              <FaAlignRight className='nav-icon' />
            </button>
          </div>

          {/* <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}> */}
          <ul className={props.showNav ? 'nav-links show-nav' : 'nav-links'}>
            <li>
              {/* <Link to='/'><FaHome className='link-icon' /> welcome</Link> */}
            </li>
            <li>
              {/* <Link to='/'><FaInfoCircle className='link-icon' /> about me</Link> */}
            </li>
            <li>
              {/* <Link to='/'><FaBriefcase className='link-icon' /> my portfolio</Link> */}
            </li>
            <li>
              {/* <Link to='/'><FaCog className='link-icon' /> my skills</Link> */}
            </li>
            <li>
              {/* <Link to='/'><FaBlog className='link-icon' /> blog</Link> */}
            </li>
            <li>
              {/* <Link to='/'><FaEnvelope className='link-icon' /> contact me</Link> */}
            </li>
          </ul>
          
          <ul className='follow-links'>
            <li className='follow-container'>
              <div className='follow-icon-container1 '>
                {/* <Link to='/'>
                    <FaFacebookF className='follow-icon FaFacebookF' />
                </Link> */}
              </div>
            </li>
            <li className='follow-container'>
              <div className='follow-icon-container2'>
                {/* <Link to='/'>
                    <FaTwitter className='follow-icon FaTwitter' />
                </Link> */}
              </div>
            </li>
            <li className='follow-container'>
              <div className='follow-icon-container3'>
                {/* <Link to='/'>
                    <FaInstagram className='follow-icon FaInstagram' />
                </Link> */}
              </div>
            </li>
            <li className='follow-container'>
              <div className='follow-icon-container4'>
                {/* <Link to='/'>
                    <FaLinkedinIn className='follow-icon FaLinkedinIn' />
                </Link> */}
              </div>
            </li>
            <li className='follow-container'>
              <div className='follow-icon-container5'>
                {/* <Link to='/'>
                    <FaGithub className='follow-icon FaGithub' />
                </Link> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default navbar;