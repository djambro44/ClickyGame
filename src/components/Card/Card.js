
import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card" onClick= {() => {props.shuffleCharacters(props.id)}}>
      <div className="card-body">
        <p className="card-text">
         {props.name},
         
        </p>
          <img src={props.image}/>
          
      </div>
    </div>
  );
}


export default Card;