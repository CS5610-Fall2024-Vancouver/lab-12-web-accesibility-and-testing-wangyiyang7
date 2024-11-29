// MockHeader.js
import React from "react";
import PropTypes from "prop-types";

const Header = ({ name, showForm, onAddClick }) => {
  return (
    <header>
      <h1>{name}</h1>
      <button onClick={onAddClick}>{showForm ? "Close" : "Add Task"}</button>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
  onAddClick: PropTypes.func.isRequired,
};

export default Header;
