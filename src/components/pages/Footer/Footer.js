import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link,useHistory,useLocation } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import dtctv1 from '../../../Logos/dtctv1.png';


function Footer() {
const history=useHistory();
const nav=(c,sc) => {
  history.push({
    pathname: '/agencies',
    state:{
      category: c,
      subCategory: sc
    }
  });
}

const handleSubmit =() =>{
  var form = document.getElementsByName("newsteller")[0];
  form.reset();
}

  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2 id='agencies'>Products</h2>
            
            {/* <a onClick={nav.bind(this,'Sector','Cement')}>hiiiii</a> */}

              <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','none')}>
                <h3>Non-Electronics</h3>
              </a>
                
                <ul className="footer-link-items-li">
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')} ><li>Clothing</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')} ><li>Beauty-products</li></a> 
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>House-products</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>Educational</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>Food and Beverage</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Sector','Cement')}><li>to-add</li></a>

                </ul>
              </div>

              <div className='footer-link-items' id='app'>
                <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}>
                  <h3>Electronics</h3>
                </a>
                
                <ul className="footer-link-items-li">
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>Smart phones</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>Laptops</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>Tvs</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>Gaming</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>Cameras</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>
                  <a style={{cursor: 'pointer'}} onClick={nav.bind(this,'Application','none')}><li>to-add</li></a>

                </ul>
                
          </div>

          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
          </div>
          
        </div>
        <div className='footer-link-wrapper'>
          
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
          </div>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img  className='navbar-icon' src={dtctv1} style={{color: 'white'}}/>
              ReviewStigator
            </Link>
          </div>
          <small className='website-rights'> © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;