import React from 'react';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import './topbar.css';

const Topbar = () => {
   return (
      <div className="topbar">
         <div className="topbarWrapper">
            <div className="topLeft">
               <span className="logo">ADMIN-LOGO</span>
            </div>

            <div className="topRight">
               <div className="topbarIconContainer">
                  <NotificationsNone />
                  <span className="topIconBadge">2</span>
               </div>
               <div className="topbarIconContainer">
                  <Language />
                  <span className="topIconBadge">1</span>
               </div>
               <div className="topbarIconContainer">
                  <Settings />
               </div>
               <img
                  src="https://source.unsplash.com/600x600/?face"
                  alt="display profile"
                  className="topAvatar"
               />
            </div>
         </div>
      </div>
   );
};

export default Topbar;
