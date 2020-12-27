import React, { useState } from "react";

import Search from "./components/GifSearch";
import GifGrid from "./components/GifGrid";

const GifApp = () => {
  const [categories, setCategories] = useState(["Naruto"]);

  return (
    <>
      <h2>GifApp</h2>
      <Search setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
