import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Comparison.scss';

const Comparison = ({ t }) => (
  <section id="comparison">
    <div className="container">
      {t('test')}
    </div>
  </section>
);

Comparison.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Comparison);
