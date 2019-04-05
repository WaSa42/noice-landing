import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Section1.scss';

const Section1 = ({ t }) => (
  <section id="section-1">
    <div className="container">
      <h3 dangerouslySetInnerHTML={{ __html: t('section.1.visible') }} />
      <h3 className="d-none d-lg-block" dangerouslySetInnerHTML={{ __html: t('section.1.d-lg-block') }} />
    </div>
  </section>
);

Section1.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Section1);
