import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

import * as S from "./Modal.styles";
import SuggestedBeers from "../SuggestedBeers/SuggestedBeers";

const Modal = props => {
  const { history } = props;
  const renderModalContent = () => {
    if (!props.name && !props.image_url) {
      return <Spinner />;
    }
    return (
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <S.ModalBeerName>{props.name}</S.ModalBeerName>
        <S.Cancel onClick={() => history.push("/")} alt={"Cancel"} />
        <S.ModalBeerBox>
          <S.ModalBeerImg src={props.img} alt={props.name} />
          <S.ModalBeerTagline>
            <i>{props.tagline}</i>
          </S.ModalBeerTagline>
        </S.ModalBeerBox>
        <S.ModalBeerDesc>{props.description}</S.ModalBeerDesc>
        <S.ModalSuggestedBeers>
          <SuggestedBeers />
        </S.ModalSuggestedBeers>
      </S.ModalContent>
    );
  };
  return ReactDOM.createPortal(
    <S.Modal onClick={() => history.push("/")}>{renderModalContent()}</S.Modal>,
    document.querySelector("#modal")
  );
};

export default withRouter(Modal);
