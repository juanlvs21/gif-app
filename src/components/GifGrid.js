import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Item from "./GifGridItem";

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(); // eslint-disable-next-line
  }, []);

  const getGifs = async () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=gCqdfdP66ZNiCQyCO6b1mi7AhsW3fFDm&limit=10&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
      return {
        id,
        title,
        url: images?.downsized_medium.url,
      };
    });

    setImages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>

      <div>
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
