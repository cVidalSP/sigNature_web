import React, { useEffect, useState } from 'react';

import './DashboardItem.css';

export default function DashboardItem({data}){

    return(
        <div className="mainContainer">
            <div className="header">

            </div>
            
            <div className="footer"> 
                <p>{}</p>
                <p>{}</p>
            </div>
        </div>
    )
}

