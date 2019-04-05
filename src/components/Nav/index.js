import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTranslation } from 'react-i18next';

import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faTwitch } from '@fortawesome/free-brands-svg-icons/faTwitch';
import { faWikipediaW } from '@fortawesome/free-brands-svg-icons/faWikipediaW';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Nav.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: 0, collapsed: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => this.listenToScroll());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.listenToScroll());
  }

  listenToScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    this.setState({ scrolled });
  }

  collapse() {
    const { collapsed } = this.state;
    this.setState({ collapsed: !collapsed });
  }

  render() {
    const { t } = this.props;
    const { scrolled, collapsed } = this.state;
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
            onClick={() => this.collapse()}
          >
            <FontAwesomeIcon className="navbar-toggler-icon" icon={faBars} />
          </button>

          <div className={classNames('collapse navbar-collapse', { show: collapsed })} id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <button onClick={() => false} className="no-style nav-link" role="link" type="button">Section 1</button>
              </li>
              <li className="nav-item">
                <button onClick={() => false} className="no-style nav-link" role="link" type="button">Section 2</button>
              </li>
              <li className="nav-item">
                <button onClick={() => false} className="no-style nav-link" role="link" type="button">Section 3</button>
              </li>
            </ul>
            <div className="my-2 my-lg-0 d-none d-lg-block">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faWikipediaW} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faTwitch} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="nav-item">
                  <a href="http://google.com" target="_blank" rel="noopener noreferrer" className="nav-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Nav);
