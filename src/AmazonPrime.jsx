import React from 'react';
import Card from './Cards';
import AmazonData from './AmazonData';
import "./index.css";
const AmazonPrime = () => {
    return (

        <>
            <h1 className="heading"> List of Top 5 Amazon Prime Series in 2020</h1> 
            {AmazonData.map((val, index) => {
                return (
                    <Card
                        key={val.id}
                        imgSrc={val.imgSrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                );
            })}
        </>

    );

}
export  default AmazonPrime;