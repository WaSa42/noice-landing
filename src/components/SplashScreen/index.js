import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

import './SplashScreen.css';

const SplashScreen = ({ text, children }) => (
  <div className="splashScreen">
    <div className="svg-container">
      {children || <FontAwesomeIcon icon={faCircleNotch} spin />}
      <p className="mt-2">{text}</p>
    </div>
  </div>
);

SplashScreen.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};


SplashScreen.defaultProps = {
  text: null,
  children: null,
};

export default SplashScreen;
