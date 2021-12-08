import React from 'react';
import { Visibility } from '@material-ui/icons';
import './widgetSm.css';

const WidgetSm = () => {
   return (
      <div className="widgetSm">
         <span className="widgetSmTitle">New Join Members</span>
         <ul className="widgetSmList">
            <li className="widgetSmListItem">
               <img
                  src="https://source.unsplash.com/400x400/?face"
                  alt="user profile"
                  className="widgetSmImg"
               />
               <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Web Developer</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
               </button>
            </li>

            <li className="widgetSmListItem">
               <img
                  src="https://source.unsplash.com/410x410/?face"
                  alt="user profile"
                  className="widgetSmImg"
               />
               <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Web Developer</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
               </button>
            </li>

            <li className="widgetSmListItem">
               <img
                  src="https://source.unsplash.com/420x420/?face"
                  alt="user profile"
                  className="widgetSmImg"
               />
               <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Web Developer</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
               </button>
            </li>

            <li className="widgetSmListItem">
               <img
                  src="https://source.unsplash.com/430x430/?face"
                  alt="user profile"
                  className="widgetSmImg"
               />
               <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Web Developer</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
               </button>
            </li>

            <li className="widgetSmListItem">
               <img
                  src="https://source.unsplash.com/440x440/?face"
                  alt="user profile"
                  className="widgetSmImg"
               />
               <div className="widgetSmUser">
                  <span className="widgetSmUsername">Anna Keller</span>
                  <span className="widgetSmUserTitle">Web Developer</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
               </button>
            </li>
         </ul>
      </div>
   );
};

export default WidgetSm;
