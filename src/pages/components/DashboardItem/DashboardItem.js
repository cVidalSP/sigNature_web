import React from 'react';
import './DashboardItem.css';

export default function DashboardItem({data}){
    return(
        <div className="card">
            <div className="cardHeader">
                <p>
                    {data.name}
                </p>
                <p>
                    {`Nr. de votos: ${data.qtAss}`}
                </p>
            </div>
            <img src={data.image} className="cardImage"/>
            <div className="cardFooter">
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

