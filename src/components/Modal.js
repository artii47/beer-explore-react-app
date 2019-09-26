import React from "react";
import "../scss/Modal.scss";
import history from "../history";
import Spinner from "./spinner";
import crossSvg from "../svg/cross.svg";
import * as S from "../styled-components/modal";

const Modal = props => {
  const renderModalContent = () => {
    if (!props.name && !props.image_url) {
      return <Spinner />;
    }
    return (
      <S.ModalContent onClick={e => e.stopPropagation()}>
        <S.ModalBeerName>{props.name}</S.ModalBeerName>
        <S.ModalCancel
          src={crossSvg}
          onClick={() => history.push("/")}
          alt={"Cancel"}
        />
        <S.ModalBeerBox>
          <S.ModalBeerImg src={props.img} alt={props.name} />
          <S.ModalBeerTagline>
            <i>{props.tagline}</i>
          </S.ModalBeerTagline>
        </S.ModalBeerBox>
        <S.ModalBeerDesc>{props.description}</S.ModalBeerDesc>
        <S.ModalText>You may also like</S.ModalText>
        <S.ModalSuggestedBeers>
          {props.renderSuggestedBeers()}
        </S.ModalSuggestedBeers>
      </S.ModalContent>
    );
  };
  return (
    <S.Modal onClick={() => history.push("/")}>{renderModalContent()}</S.Modal>
  );
};

export default Modal;
