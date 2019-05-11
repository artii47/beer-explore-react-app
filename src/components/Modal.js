import React, { Component } from "react";
import "../scss/Modal.scss";
import { Link } from "react-router-dom";
import history from "../history";
import "../scss/spinner.scss";

class Modal extends Component {
  render() {
    return (
      <div onClick={() => history.push("/")} className="modal">
        <div onClick={e => e.stopPropagation()} className="modal__content">
          {/* <svg className='modal__icon'>
            <use xlinkHref="../svg/#icon-star.svg" />
          </svg> */}
          {this.props.name ? "" : <div className="lds-dual-ring" />}
          <div className="modal__tagline">
            <i>{this.props.tagline} </i>
          </div>
          <img className="modal__img" src={this.props.img} />
          <div className="modal__name">{this.props.name}</div>
          <div className="modal__desc">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
