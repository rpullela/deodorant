import React, { FunctionComponent, useContext } from 'react';
import { Link } from 'gatsby';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import { ReactComponent as UnileverLogo } from '../../images/unilever-logo.svg';
import './styles.scss';
import AuthContext from 'src/contexts/AuthContext';

const Header: FunctionComponent = () => {
  const authContext = useContext(AuthContext);

  return (
    <header
      className="bp-header"
      role="banner"
      aria-label="header"
      data-cy="header"
    >
      <div className="bp-container">
        <div className="bp-header_content" data-cy="headerContent">
          <div className="bp-logo" data-cy="logo">
            <Link className="bp-logo-link" to="/">
              <UnileverLogo />
              <span className="srOnly">Brand Logo</span>
            </Link>
          </div>
          <SiteNavigation />
          <SiteSearch data-cy="searchLink" />
          <span className="bp-upper-nav" data-cy="upperNav">
            <span className="bp-upper-nav_links">
              <Link
                to="/contact-us"
                className="bp-upper-nav_link"
                data-cy="contactUsLink"
              >
                Contact
              </Link>{' '}
              |{' '}
              <Link
                to="/about-us"
                className="bp-upper-nav_link"
                data-cy="aboutUsLink"
              >
                About Us
              </Link>{' '}
              |{' '}
              <Link to="/faqs" className="bp-upper-nav_link" data-cy="faqsLink">
                FAQs
              </Link>
              |{' '}
              {authContext.auth ? (
                <Link to="/profile" className="bp-upper-nav_link">
                  Profile
                </Link>
              ) : (
                <span>
                  {' '}
                  <Link to="/login" className="bp-upper-nav_link">
                    Login
                  </Link>
                  /
                  <Link to="/sign-up" className="bp-upper-nav_link">
                    Sign up
                  </Link>
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
