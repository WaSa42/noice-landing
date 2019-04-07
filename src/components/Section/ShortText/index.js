import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './ShortText.scss';

const ShortText = ({ t }) => (
  <section id="shortText">
    <div className="container">
      <h3 dangerouslySetInnerHTML={{ __html: t('section.shortText.visible') }} />
      <h3 className="d-none d-lg-block" dangerouslySetInnerHTML={{ __html: t('section.shortText.d-lg-block') }} />
    </div>
  </section>
);

ShortText.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ShortText);
