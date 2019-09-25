import React from "react";
import "../scss/Modal.scss";
import history from "../history";
import Spinner from "./spinner";
import crossSvg from "../svg/cross.svg";

const Modal = props => {
  const renderModalContent = () => {
    if (!props.name && !props.image_url) {
      return <Spinner />;
    }
    return (
      <div onClick={e => e.stopPropagation()} className="modal__content">
        <div className="modal__name">{props.name}</div>
        <img
          src={crossSvg}
          onClick={() => history.push("/")}
          className="modal__cancel"
          alt={props.name}
        />
        <div className="modal__beer-box">
          <img className="modal__img" src={props.img} alt={props.name} />
          <div className="modal__tagline">
            <i>{props.tagline}</i>
          </div>
        </div>
        <div className="modal__desc">{props.description}</div>
        <h3 className="modal__text">You may also like</h3>
        <div className="modal__youmayalsolike">
          {props.renderSuggestedBeers()}
        </div>
      </div>
    );
  };
  return (
    <div onClick={() => history.push("/")} className="modal">
      {renderModalContent()}
    </div>
  );
};

export default Modal;
