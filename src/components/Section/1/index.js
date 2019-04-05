import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Section1.scss';

const Section1 = ({ t }) => (
  <section id="section-1">
    <p>{t('test')}</p>
  </section>
);

Section1.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Section1);
