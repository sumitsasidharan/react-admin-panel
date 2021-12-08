import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

const FeaturedInfo = () => {
   return (
      <div className="featured">
         <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">$2,563</span>
               <span className="featuredMoneyRate">
                  -23.5 <ArrowDownward className="featuredIcon negative" />
               </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
         </div>

         <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">$4,583</span>
               <span className="featuredMoneyRate">
                  -3.5 <ArrowDownward className="featuredIcon negative" />
               </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
         </div>

         <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
               <span className="featuredMoney">$2,003</span>
               <span className="featuredMoneyRate">
                  +3.5 <ArrowUpward className="featuredIcon" />
               </span>
            </div>
            <div className="featuredSub">Compared to last month</div>
         </div>
      </div>
   );
};

export default FeaturedInfo;
