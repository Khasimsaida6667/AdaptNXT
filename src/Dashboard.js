import React, { useState } from 'react';
import SalesVsOrdersChart from './SalesVsOrdersChart';
import SalesPieChart from './SalesPieChart';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item === 'Dashboard' ? null : item);
  };

  const renderContent = () => {
    if (selectedItem) {
      return (
        <div className="sample-page">
          <h2>Hello, you clicked on {selectedItem}</h2>
          <p>This is a sample page for {selectedItem}.</p>
        </div>
      );
    }

    return (
      <>
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="charts-container">
          <SalesVsOrdersChart />
          <SalesPieChart />
        </div>
      </>
    );
  };

  const menuItems = ['Dashboard', 'Inventory', 'Order', 'Returns', 'Customers', 'Shipping', 'Channel', 'Integrations', 'Calculators', 'Reports', 'Account'];

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="sidebar-header" onClick={() => handleItemClick('Dashboard')}>Dashboard</div>
        <ul className="sidebar-menu">
          {menuItems.slice(1).map((item) => (
            <li 
              key={item} 
              onClick={() => handleItemClick(item)}
              className={selectedItem === item ? 'active' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;