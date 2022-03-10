import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <div className="card">
    <h2>{props.name}</h2>
    <p>
      {props.description}
    </p>
    <img src={process.env.PUBLIC_URL + props.img} alt="{props.alt}" />;
  </div>
  )
}

export default Card;



