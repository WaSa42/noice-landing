import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import moment from 'moment';
import 'moment/locale/fr';
import 'moment/locale/en-gb';
import numeral from 'numeral';
import 'numeral/locales/fr';
import 'numeral/locales/en-gb';

import { localeTo } from '../../helpers/locales';

import './App.scss';

import Nav from '../Nav';
import Header from '../Section/Header';
import Section1 from '../Section/1';
import Section2 from '../Section/2';

const App = ({ i18n, t }) => {
  const handleLanguageSetting = () => {
    setModulesLocales();
    setMetas();
  };

  const setModulesLocales = () => {
    moment.locale(localeTo(i18n.language, 'moment'));
    numeral.locale(localeTo(i18n.language, 'moment'));
  };

  const setMetas = () => {
    document.title = t('project.title');
    document.getElementsByTagName('meta').description.content = t('project.description');
    document.getElementsByTagName('meta').language.content = i18n.language;
  };

  React.useEffect(handleLanguageSetting, [i18n.language]);

  return (
    <div id="app">
      <div id="layout">
        <Nav />
        <Header />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
};

App.propTypes = {
  i18n: PropTypes.shape({ language: PropTypes.string }),
  t: PropTypes.func.isRequired,
};

App.defaultProps = {
  i18n: { language: 'en' },
};

export default withTranslation()(App);
