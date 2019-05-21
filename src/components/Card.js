import React from "react";
import "../scss/Card.scss";
import { Link } from "react-router-dom";

const Card = props => {
  return (
    <div className="card">
      <img alt="img" className="card__img" src={props.imgUrl} />
      <div className="card__name">{props.beerName}</div>
      <div className="card__description">
        {props.desc.length > 200
          ? props.desc.slice(0, 200).concat("...")
          : props.desc}
      </div>
      <Link to={`/beer/${props.beerId}`} className="card__btn">
        Details
      </Link>
    </div>
  );
};

export default Card;
