import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/en-gb';

import numeral from 'numeral';
import 'numeral/locales/fr';
import 'numeral/locales/en-gb';

import { localeTo } from '../../helpers/locales';

import './App.css';
import Nav from '../Nav';

class App extends React.Component {
  componentDidMount() {
    const { i18n } = this.props;
    moment.locale(localeTo(i18n.language, 'moment'));
    numeral.locale(localeTo(i18n.language, 'moment'));
  }

  componentDidUpdate(prevProps) {
    const { i18n } = this.props;
    if (prevProps.i18n.language !== i18n.language) {
      moment.locale(localeTo(i18n.language, 'moment'));
      numeral.locale(localeTo(i18n.language, 'moment'));
    }
  }

  render() {
    const { i18n, t } = this.props;
    return (
      <div id="app">
        <Helmet>
          <title>{t('project.title')}</title>
          <meta name="description" content={t('project.description')} />
          <meta name="robots" content="all" />
          <meta name="language" content={i18n.language} />
        </Helmet>
        <div id="layout">
          <Nav />
          <div className="content-wrapper">
            <div className="container">
              {t('test')}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  i18n: PropTypes.shape({ language: PropTypes.string }),
  t: PropTypes.func.isRequired,
};

App.defaultProps = {
  i18n: { language: 'en' },
};

export default withTranslation()(App);
