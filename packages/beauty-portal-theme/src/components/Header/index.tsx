import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import SiteNavigation from '../Navigation';
import SiteSearch from './search';
import { ReactComponent as UnileverLogo } from '../../images/unilever-logo.svg';
import './styles.scss';

const Header: FunctionComponent = () => {
  // TODO: integrate with authentication service
  const auth = false;

  return (
    <header className="bp-header" role="banner" aria-label="header">
      <div className="bp-container">
        <div className="bp-header_content">
          <div className="bp-logo">
            <Link className="bp-logo-link" to="/">
              <UnileverLogo />
              <span className="srOnly">Brand Logo</span>
            </Link>
          </div>
          <SiteNavigation />
          <SiteSearch />
          <span className="bp-upper-nav">
            <span className="bp-upper-nav_links">
              <Link to="/contact-us" className="bp-upper-nav_link">
                Contact
              </Link>{' '}
              |{' '}
              <Link to="/about-us" className="bp-upper-nav_link">
                About Us
              </Link>{' '}
              |{' '}
              <Link to="/faqs" className="bp-upper-nav_link">
                FAQs
              </Link>
              |{' '}
              {auth ? (
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
