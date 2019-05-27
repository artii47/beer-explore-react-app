import React from "react";
import "../scss/spinner.scss";

const spinner = props => {
  return <div className={`lds-dual-ring lds-dual-ring__${props.bottom}`} />;
};

export default spinner;
