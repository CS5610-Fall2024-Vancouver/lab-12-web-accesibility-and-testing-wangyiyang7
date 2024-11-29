// Header.js
import React from "react";
import PropTypes from "prop-types";

const Header = ({ name, showForm }) => {
  return (
    <header>
      <h1>{name}</h1>
      {showForm ? <button>Close</button> : <button>Add Task</button>}
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  showForm: PropTypes.bool.isRequired,
};

export default Header;
