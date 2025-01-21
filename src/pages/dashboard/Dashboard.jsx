import React, { useState } from 'react';
import './dashboard.css';
import Header from '../../components/header/Header';
import PieChart from '../../components/piechart/Piechart';
import Sidebar from '../../components/sidebar/Sidebar';
import Card from '../../components/Card/Card';
import MapComponent from '../../components/map/Map';
import { MdOutlineDashboard, MdRedeem } from "react-icons/md";
import { FiTool } from 'react-icons/fi';
import { CiUser } from 'react-icons/ci';
import { HiDocumentReport, HiOutlineDocumentSearch } from 'react-icons/hi';
import { LiaLifeRing } from 'react-icons/lia';
import { RiMapPinTimeFill } from 'react-icons/ri';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { TbTransactionRupee } from 'react-icons/tb';
import { LuLayoutDashboard } from 'react-icons/lu';

const menuItems = [
  { name: 'MLP Dashboard', icon: <MdOutlineDashboard /> },
  { name: 'RLP Dashboard', icon: <MdOutlineDashboard /> },
  { name: 'View Mechanic', icon: <FiTool /> },
  { name: 'View Retailer', icon: <CiUser /> },
  { name: 'User Insights', icon: <HiDocumentReport /> },
  { name: 'SKU-wise Data', icon: <HiOutlineDocumentSearch /> },
  { name: 'Slab based Consumption', icon: <LiaLifeRing /> },
  { name: 'View Redemption', icon: <MdRedeem /> },
  { name: 'View Expiry', icon: <RiMapPinTimeFill /> },
  { name: 'View E-Transfer', icon: <FaMoneyBillTransfer /> },
  { name: 'View Transaction', icon: <TbTransactionRupee /> },
  { name: 'Rewards Catalogue', icon: <LuLayoutDashboard /> },
  { name: 'User Activity', icon: <CiUser /> },
];

const Dashboard = () => {
  const [openSidebar,setOpenSidebar] = useState(false)
  
  const user = { name: 'Rahul Lad', avatar: '/path-to-avatar.jpg' };

  return (
    <div className="dashboard">
      <Sidebar menuItems={menuItems} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="dashboard-content">
        <Header user={user} setOpenSidebar={setOpenSidebar} />
        <div className="cards">
          <Card title="Total Download" value="85" avg="91" />
          <Card title="Total Registered" value="41" avg="48" />
          <Card title="Total DBT Verified" value="47" avg="16" />
          <Card title="Total Active" value="922" avg="894" />
          <Card title="Pack Sold" value="3753" avg="5975" />
        </div>
        <div className="charts">
          <MapComponent />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
