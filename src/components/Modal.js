import React, { Component } from "react";
import "../scss/Modal.scss";
import history from "../history";
import Spinner from "./spinner";

class Modal extends Component {
  renderModalContent = () => {
    if (!this.props.name) {
      return <Spinner />;
    }
    return (
      <div onClick={e => e.stopPropagation()} className="modal__content">
        <img
          className="modal__img"
          src={this.props.img}
          alt={this.props.name}
        />
        <div className="modal__tagline">
          <i>{this.props.tagline}</i>
        </div>
        <div className="modal__name">{this.props.name}</div>
        <div className="modal__desc">{this.props.description}</div>
      </div>
    );
  };
  render() {
    return (
      <div onClick={() => history.push("/")} className="modal">
        {this.renderModalContent()}
      </div>
    );
  }
}

export default Modal;
