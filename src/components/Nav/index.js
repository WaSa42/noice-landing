import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Nav.css';

const Nav = ({ t }) => (
  <header id="nav">
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container position-relative">
        <button
          className="navbar-brand mb-0 h1 d-none d-md-inline no-style"
          type="button"
          dangerouslySetInnerHTML={{ __html: t('project.shortName') }}
        />
      </div>
    </nav>
  </header>
);

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Nav);
