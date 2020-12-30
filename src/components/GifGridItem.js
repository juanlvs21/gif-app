import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__bounceIn">
      <img src={url} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
