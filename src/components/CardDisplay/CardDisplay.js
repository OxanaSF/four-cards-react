// import React from 'react'
import Card from '../Card/Card';
import "./CardDisplay.css";


const CardDisplay = (props) => {
    

  return (
    <div className="cardDisplay">
        <div className="left-column">
            <Card
            name={props.cards[0].name}
            description={props.cards[0].description}
            img={props.cards[0].img}
            logo={props.cards[0].alt}
            />
        </div>
        <div className="middleColumn">
            <div className="middleColumn-top">
            <Card
            name={props.cards[1].name}
            description={props.cards[1].description}
            img={props.cards[1].img}
            logo={props.cards[1].alt}
            />
            </div>
            <div className="middleColumn-bottom">
            <Card
            name={props.cards[2].name}
            description={props.cards[2].description}
            img={props.cards[2].img}
            logo={props.cards[2].alt}
            />
            </div>
        </div>
        <div className="right-column">
        <Card
            name={props.cards[3].name}
            description={props.cards[3].description}
            img={props.cards[3].img}
            logo={props.cards[3].alt}
            />
        </div>
        
       
    </div>
  )
}

export default CardDisplay;
