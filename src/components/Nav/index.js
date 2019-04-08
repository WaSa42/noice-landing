import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Nav.scss';

const Nav = ({ t }) => {
  const [scrolled, setScrolled] = React.useState(0);
  const [collapsed, setCollapsed] = React.useState(false);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled(winScroll / height);
  };

  const addScrollListener = () => {
    window.addEventListener('scroll', () => listenToScroll());
    return () => window.removeEventListener('scroll');
  };

  React.useEffect(addScrollListener, []);

  const className = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top';
  return (
    <nav id="nav" className={classNames(className, { scrolled, collapsed })}>
      <div className="container">
        <button
          onClick={() => false}
          className="no-style navbar-brand"
          role="link"
          type="button"
          dangerouslySetInnerHTML={{ __html: t('project.shortName') }}
        />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FontAwesomeIcon className="navbar-toggler-icon" icon={faBars} />
        </button>

        <div className={classNames('collapse navbar-collapse', { show: collapsed })} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <button onClick={() => false} className="no-style nav-link" role="link" type="button">
                Description
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => false} className="no-style nav-link" role="link" type="button">
                Preview
              </button>
            </li>
            <li className="nav-item">
              <button onClick={() => false} className="no-style nav-link" role="link" type="button">
                Last Info
              </button>
            </li>
          </ul>
          <div className="my-2 my-lg-0 d-none d-lg-block">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faBook} />
                  <span className="ml-2">Documentation</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faGithub} />
                  <span className="ml-2">Sources</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <FontAwesomeIcon icon={faQuestionCircle} />
                  <span className="ml-2">FAQ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Nav);
