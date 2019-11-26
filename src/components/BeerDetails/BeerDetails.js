import React from "react";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

import Spinner from "../Spinner/Spinner";
import { getBeer, getIsBeerFetching } from "../../selectors/selectors";
import PropTypes from "prop-types";

const BeerDetails = () => {
  const beer = useSelector(getBeer);
  const isBeerFetching = useSelector(getIsBeerFetching);
  return (
    <div>
      {isBeerFetching ? <Spinner /> : ""}
      <Modal
        tagline={beer.tagline}
        name={beer.name}
        img={beer.image_url}
        description={beer.description}
      />
    </div>
  );
};

export default BeerDetails;

BeerDetails.propTypes = {
  beer: PropTypes.object
};
