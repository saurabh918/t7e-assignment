import React from 'react';
import './sidebar.css';
import { RxCross2 } from 'react-icons/rx';

const Sidebar = ({ menuItems,openSidebar,setOpenSidebar }) => (
  <nav className={`sidebar ${openSidebar ? 'open-sidebar' : ''}`}>
    <RxCross2 className='cross-icon' onClick={() => setOpenSidebar(false)} />
    <h3 className='menu-heading'>menu</h3>
    <ul className='menu-item-list'>
      {menuItems.map((item, index) => (
        <li key={index} className="menu-item">
        <span className="menu-icon">{item.icon}</span>
        <span className="menu-text">{item.name}</span>
      </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
