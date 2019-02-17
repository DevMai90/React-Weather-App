import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <nav className="navbar nav navbar-dark bg-primary mb-3">
      <div className="container">
        <a href="/" className="navbar-brand">
          {props.branding}
        </a>
      </div>
    </nav>
  );
};

Header.propTypes = {
  branding: PropTypes.string
};

export default Header;
