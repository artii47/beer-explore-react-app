import React from "react";
import { Link } from "react-router-dom";
import * as S from "../styled-components/card";

const Card = props => {
  const renderDescription = () => {
    return props.desc.length > 200
      ? props.desc.slice(0, 200).concat("...")
      : props.desc;
  };
  return (
    <S.Card>
      <S.CardImg alt={props.beerName} src={props.imgUrl} />
      <S.CardName>{props.beerName}</S.CardName>
      <S.CardDesc>{renderDescription()}</S.CardDesc>
      <S.CardLinkButton to={`/beer/${props.beerId}`}>Details</S.CardLinkButton>
    </S.Card>
  );
};

export default Card;
