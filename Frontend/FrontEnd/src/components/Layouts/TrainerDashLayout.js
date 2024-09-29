import React from 'react';
import SideBar from '../TrainerDash/SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <SideBar /> {/* Your default sidebar */}
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
