import React, { useState } from "react";
import PropTypes from "prop-types";

import GifSearch from "./components/GifSearch";
import GifGrid from "./components/GifGrid";

const GifApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <>
      <h2>GifApp</h2>
      <GifSearch setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

GifApp.prototype = {
  defaultCategories: PropTypes.array,
};

export default GifApp;
