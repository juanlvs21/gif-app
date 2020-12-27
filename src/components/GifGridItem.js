import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ url, title }) => {
  return (
    <div>
      <img src={url} alt={title} />
    </div>
  );
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default GifGridItem;
