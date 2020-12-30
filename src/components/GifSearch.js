import React, { useState } from "react";
import PropTypes from "prop-types";

const GifSearch = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = ({ target: { value } }) => setInputValue(value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 0) {
      setCategories((categories) => [inputValue, ...categories]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChangeInput} />
    </form>
  );
};

GifSearch.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default GifSearch;
