import React from "react";
import PropTypes from "prop-types";

import Item from "./GifGridItem";
import Spinner from "./Spinner";

import { useFetchGift } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGift(category);

  return (
    <>
      <h3 className="category-title animate__animated animate__fadeIn">
        {category}
      </h3>
      {loading && <Spinner />}

      <div className="card-grid">
        {images.map((img) => (
          <Item {...img} key={img.id} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
