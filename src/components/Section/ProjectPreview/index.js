import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './ProjectPreview.scss';

const ProjectPreview = ({ t }) => (
  <section id="project-preview">
    <h4>{t('section.projectPreview.text')}</h4>
  </section>
);

ProjectPreview.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ProjectPreview);
