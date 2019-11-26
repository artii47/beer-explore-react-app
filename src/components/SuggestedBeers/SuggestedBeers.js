import React from "react";
import { useSelector } from "react-redux";
import { getSuggestedBeers } from "../../selectors/selectors";
import * as S from "./SuggestedBeers.styles";

const SuggestedBeers = () => {
  const suggestedBeers = useSelector(getSuggestedBeers);
  if (!suggestedBeers) {
    return <div>loading</div>;
  }
  return suggestedBeers.slice(0, 3).map(beer => {
    return (
      <S.SuggestedItem to={`/beer/${beer.id}`} key={beer.id}>
        <S.SuggestedBeerName>
          {beer.name.length < 30
            ? beer.name
            : beer.name.slice(0, 30).concat("...")}
        </S.SuggestedBeerName>
        <React.Fragment>
          <S.SuggestedBeerImg src={beer.image_url} alt={beer.name} />
        </React.Fragment>
      </S.SuggestedItem>
    );
  });
};

export default SuggestedBeers;
