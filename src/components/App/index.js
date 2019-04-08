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
import ShortText from '../Section/ShortText';
import ProjectPreview from '../Section/ProjectPreview';
import Miscellaneous from '../Section/Miscellaneous';
import Footer from '../Section/Footer';

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
        <ShortText />
        <ProjectPreview />
        <Miscellaneous />
        <Footer />
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
