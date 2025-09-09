import React from 'react'
import { pageLinks } from '../data.jsx';
import React from 'react';

const PageLinks = ({ id, href, text }) => {
  return (
    <ul className={parentClass} id='nav-links'>
            {pageLinks.map((link) => {
                return (
                    <PageLinks key={link.id} {...link} itemClass={itemClass}/>
                //   <li key={link.id}>
                //     <a href={link.href} className='nav-link'>
                //       {link.text}
                //     </a>
                //   </li>
                );
            })}
        </ul>
  );
};

export default PageLinks