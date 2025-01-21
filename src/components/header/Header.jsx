import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import { FaUserCircle } from 'react-icons/fa';
import { MdFormatLineSpacing, MdKeyboardArrowDown } from 'react-icons/md';

const Header = ({setOpenSidebar}) => {
  return (
    <header className="header-container">
      <Logo />
      <MdFormatLineSpacing style={{ fontSize: '30px', color: '#6a6e75' }} onClick={() => setOpenSidebar(true)} />
      <div className="header-right">
        <FaUserCircle style={{
    color: 'yellow', 
    backgroundColor: 'white',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.5)',
    fontSize: '24px'
  }} />
        <div className="admin-content">
        <p>OPERATIONS ADMIN</p>
        <span>User Name <MdKeyboardArrowDown /></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
