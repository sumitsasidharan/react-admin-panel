import React from 'react';
import {
   CalendarToday,
   LocationSearching,
   MailOutline,
   PermIdentity,
   PhoneAndroid,
   Publish,
} from '@material-ui/icons';
import './user.css';
import { Link } from 'react-router-dom';

const User = () => {
   return (
      <div className="user">
         <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <Link to="/new-user">
               <button className="userAddButton">Create</button>
            </Link>
         </div>

         <div className="userContainer">
            <div className="userShow">
               <div className="userShowTop">
                  <img
                     src="https://source.unsplash.com/500x500/?lady"
                     alt=""
                     className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                     <span className="userShowUsername">Anna Becker</span>
                     <span className="userShowUserTitle">Web Developer</span>
                  </div>
               </div>

               <div className="userShowBottom">
                  <span className="userShowTitle">Account Details</span>
                  <div className="userShowInfo">
                     <PermIdentity className="userShowIcon" />
                     <span className="userShowInfoTitle">annabeck99</span>
                  </div>
                  <div className="userShowInfo">
                     <CalendarToday className="userShowIcon" />
                     <span className="userShowInfoTitle">07.11.1992</span>
                  </div>

                  <span className="userShowTitle">Contact Details</span>
                  <div className="userShowInfo">
                     <PhoneAndroid className="userShowIcon" />
                     <span className="userShowInfoTitle">+91 999 526 256</span>
                  </div>
                  <div className="userShowInfo">
                     <MailOutline className="userShowIcon" />
                     <span className="userShowInfoTitle">annab@gmail.com</span>
                  </div>
                  <div className="userShowInfo">
                     <LocationSearching className="userShowIcon" />
                     <span className="userShowInfoTitle">New Jersey | USA</span>
                  </div>
               </div>
            </div>

            <div className="userUpdate">
               <span className="userUpdateTitle">Edit</span>

               <form className="userUpdateForm">
                  <div className="userUpdateLeft">
                     <div className="userUpdateItem">
                        <label>Username</label>
                        <input
                           className="userUpdateInput"
                           type="text"
                           placeholder="annabeck99"
                        />
                     </div>
                     <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input
                           className="userUpdateInput"
                           type="text"
                           placeholder="Anna Becker"
                        />
                     </div>
                     <div className="userUpdateItem">
                        <label>Email</label>
                        <input
                           className="userUpdateInput"
                           type="text"
                           placeholder="annab@gmail.com"
                        />
                     </div>
                     <div className="userUpdateItem">
                        <label>Phone</label>
                        <input
                           className="userUpdateInput"
                           type="text"
                           placeholder="+91 999 526 256"
                        />
                     </div>
                     <div className="userUpdateItem">
                        <label>Address</label>
                        <input
                           className="userUpdateInput"
                           type="text"
                           placeholder="New Jersey | USA"
                        />
                     </div>
                  </div>

                  <div className="userUpdateRight">
                     <div className="userUpdateUpload">
                        <img
                           className="userUpdateImg"
                           src="https://source.unsplash.com/500x500/?lady"
                           alt=""
                        />
                        <label htmlFor="file">
                           <Publish className="userUpdateIcon" />
                        </label>
                        <input
                           type="file"
                           id="file"
                           style={{ display: 'none' }}
                        />
                     </div>

                     <button className="userUpdateButton">Update</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default User;
