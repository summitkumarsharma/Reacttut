
import React from 'react';
import CardHead from './CardHead';
import CardImage from './CardImage';
import "./index.css";


const Card = (props) =>{
    // console.log(props);
    return (
      <> 
          <div className="card">
            <CardImage imgSrc={props.imgSrc} />
            <div className="card-info">
              <span className="card_category">{props.title}</span>
              <CardHead sname={props.sname} />
              <a href={props.link} target="_blank" rel ="noopener noreferrer"><button className="btn">watch now</button></a>
            </div>
          </div>  
      </>
    )
  };

  export default Card;