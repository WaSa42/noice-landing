import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Nav.scss';

const Nav = ({ t }) => (
  <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
    <div className="container">
      <a className="navbar-brand" href="#" dangerouslySetInnerHTML={{ __html: t('project.shortName') }} />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon className="navbar-toggler-icon" icon={faBars} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Section 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Section 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Section 3</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Nav);
