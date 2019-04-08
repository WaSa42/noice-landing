import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { faRocket } from '@fortawesome/free-solid-svg-icons/faRocket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.scss';

const Header = ({ t }) => (
  <header id="header" className="position-relative">
    <div className="container">
      <div className="text">
        <div className="blocks">
          <div className="block left" />
          <div className="block center" />
          <div className="block right" />
        </div>
        <h1>{t('section.header.title')}</h1>
        <p>{t('section.header.subtitle')}</p>
      </div>
    </div>

    <button
      onClick={() => window.scrollTo({ top: window.innerHeight - 56, behavior: 'smooth' })}
      className="btn btn-outline-color4 btn-lg"
      role="link"
      type="button"
    >
      <FontAwesomeIcon icon={faRocket} />
      <span className="ml-2">{t('section.header.button')}</span>
    </button>
  </header>
);

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Header);
