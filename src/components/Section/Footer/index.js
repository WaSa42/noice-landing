import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.scss';

const href = '#';

const Footer = ({ t }) => (
  <footer id="footer">
    <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                About
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Videos
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                About
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Videos
              </a>
            </li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Quick links</h5>
          <ul className="list-unstyled quick-links">
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Home
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                About
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                FAQ
              </a>
            </li>
            <li>
              <a href={href}>
                <i className="fa fa-angle-double-right" />
                Get Started
              </a>
            </li>
            <li>
              <a href="https://wwwe.sunlimetech.com" title="Design and developed by">
                <i className="fa fa-angle-double-right" />
                Imprint
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href={href}><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li className="list-inline-item"><a href={href}><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li className="list-inline-item"><a href={href}><FontAwesomeIcon icon={faTwitch} /></a></li>
            <li className="list-inline-item"><a href={href}><FontAwesomeIcon icon={faGithub} /></a></li>
            <li className="list-inline-item">
              <a href={href} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWikipediaW} /></a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            <u><a href={href}>{t('project.title')}</a></u>
            {' '}
            {t('project.description')}
          </p>
          <p className="h6">
            &copy All right Reversed.
            <a
              className="text-green ml-2"
              href="https://www.sunlimetech.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('project.name')}
            </a>
          </p>
        </div>
        <hr />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Footer);
