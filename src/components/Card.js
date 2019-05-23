import React from "react";
import { Link } from "react-router-dom";
import "../scss/Card.scss";

const Card = props => {
  const renderDescription = () => {
    return props.desc.length > 200
      ? props.desc.slice(0, 200).concat("...")
      : props.desc;
  };
  return (
    <div className="card">
      <img alt={props.beerName} className="card__img" src={props.imgUrl} />
      <div className="card__name">{props.beerName}</div>
      <div className="card__description">{renderDescription()}</div>
      <Link to={`/beer/${props.beerId}`} className="card__btn">
        Details
      </Link>
    </div>
  );
};

export default Card;
