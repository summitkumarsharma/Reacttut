import React from 'react';
import Card from './Cards';
import sData from './sData';
import Heading from './Heading';

const Netflix = () => {
    return (
        <>
            <Heading />
            {sData.map((val, index) => {
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
export  default Netflix;