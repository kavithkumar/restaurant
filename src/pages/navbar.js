import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './loginform.css';

const Navb = ({username}) => {
  return (
    <nav>
      <ul>
        
        <Link to="/signup" className='nav-link'></Link>
        {
            !username?
        <Link to="/login" className='nav-link'></Link>:
        ''
        }
        {username?
        <>
        
        <b className='nav-link'></b>
        <Link to='/logout' className='nav-link'>Logout</Link>
        </>
        :
        ''}
      </ul>
    </nav>
  );
};

export default Navb;