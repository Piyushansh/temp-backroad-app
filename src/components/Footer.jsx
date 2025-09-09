import React from 'react'
import { pageLinks, socialLinks } from '../data'
import SocialLink from './SocialLink';



const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
              <li key={id}>
                <a href={href} className='footer-link'>
                  {text}
                </a>
              </li>
          );
        })}
        
        {/* <li>
          <a href='#about' className='footer-link'>
            about
          </a>
        </li>
        <li>
          <a href='#services' className='footer-link'>
            services
          </a>
        </li>
        <li>
          <a href='#featured' className='footer-link'>
            featured
          </a>
        </li> */}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <SocialLink key={link.id} {...link} itemClass='footer-icon'/>
            // <li>
            //   <a
            //     href={href}
            //     target='_blank'
            //     className='footer-icon'
            //     rel='noreferrer'
            //   >
            //     <i className={icon}></i>
            //   </a>
            // </li>

          );
        })}
        
        {/* <li>
          <a
            href='https://www.twitter.com'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-twitter'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.twitter.com'
            target='_blank'
            className='footer-icon'
          >
            <i className='fab fa-squarespace'></i>
          </a>
        </li> */}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer