import React from 'react';
import SideBarAdmin from '../DashAdmin/SideBarAdmin';

function DashboardLayout({ children }) {
  return (
    <div>
      <SideBarAdmin /> {/* Your admin sidebar */}
      <div>{children}</div>
    </div>
  );
}

export default DashboardLayout;