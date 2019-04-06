import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Section2.scss';

const Section2 = ({ t }) => (
  <section id="section-2">
    <h4>{t('section.2.text')}</h4>
  </section>
);

Section2.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Section2);
