import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
   const Button = ({ type }) => {
      return <button className={'widgetLgButton ' + type}>{type}</button>;
   };

   return (
      <div className="widgetLg">
         <h3 className="widgetLgTitle">Latest transactions</h3>
         <table className="widgetLgTable">
            <tr className="widgetLgTr">
               <th className="widgetLgTh">Customer</th>
               <th className="widgetLgTh">Date</th>
               <th className="widgetLgTh">Amount</th>
               <th className="widgetLgTh">Status</th>
            </tr>

            <tr className="widgetLgTr">
               <td className="widgetLgUser">
                  <img
                     src="https://source.unsplash.com/300x300/?face"
                     alt=""
                     className="widgetLgImg"
                  />
                  <span className="widgetLgName">Susan Singh</span>
               </td>
               <td className="widgetLgDate">7th Dec 2021</td>
               <td className="widgetLgAmount">$125.55</td>
               <td className="widgetLgStatus">
                  <Button type="Approved" />
               </td>
            </tr>

            <tr className="widgetLgTr">
               <td className="widgetLgUser">
                  <img
                     src="https://source.unsplash.com/300x310/?face"
                     alt=""
                     className="widgetLgImg"
                  />
                  <span className="widgetLgName">Susan Singh</span>
               </td>
               <td className="widgetLgDate">7th Dec 2021</td>
               <td className="widgetLgAmount">$125.55</td>
               <td className="widgetLgStatus">
                  <Button type="Declined" />
               </td>
            </tr>

            <tr className="widgetLgTr">
               <td className="widgetLgUser">
                  <img
                     src="https://source.unsplash.com/300x320/?face"
                     alt=""
                     className="widgetLgImg"
                  />
                  <span className="widgetLgName">Susan Singh</span>
               </td>
               <td className="widgetLgDate">7th Dec 2021</td>
               <td className="widgetLgAmount">$125.55</td>
               <td className="widgetLgStatus">
                  <Button type="Pending" />
               </td>
            </tr>

            <tr className="widgetLgTr">
               <td className="widgetLgUser">
                  <img
                     src="https://source.unsplash.com/350x350/?face"
                     alt=""
                     className="widgetLgImg"
                  />
                  <span className="widgetLgName">Susan Singh</span>
               </td>
               <td className="widgetLgDate">7th Dec 2021</td>
               <td className="widgetLgAmount">$125.55</td>
               <td className="widgetLgStatus">
                  <Button type="Approved" />
               </td>
            </tr>
         </table>
      </div>
   );
};

export default WidgetLg;
