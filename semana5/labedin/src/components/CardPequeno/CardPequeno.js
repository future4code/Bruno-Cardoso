import React from "react"
import "./CardPequeno.css"

function CardPequeno(props) {
  return (
    <div className="littlecard-container">
      <div>
        <div className="email">
          <img src={ props.imagemEmail } />
          <h4>{props.email}</h4>
        </div>
        
        <div className="address">
          <img src={props.imagemCasa} />
          <p>{ props.endereco }</p>
        </div>
      </div>
    </div>
  )
}

export default CardPequeno
