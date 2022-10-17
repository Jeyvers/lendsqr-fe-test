import React from 'react';
import DashboardWrapper from '../../components/DashboardWrapper';
import UserDetails from '../../components/Users';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <>
        <UserDetails />
      </>
    </DashboardWrapper>
  );
};

export default Dashboard;
