import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import SocialMenu from '../SocialMenu';
import { useStaticQuery, graphql } from 'gatsby';

import './styles.scss';

const SocialBlock: FunctionComponent<SocialBlockInterface> = ({ title }) => {
  const data = useStaticQuery(graphql`
    query socialMenu {
      brandInfo: sanityBrandInfo {
        twitterurl
        youtubeurl
        facebookurl
        instaurl
      }
    }
  `);

  return (
    <section className="social-menu-section" data-cy="socialMenuBlock">
      <div className={classNames('container', 'social-menu-p0')}>
        <div className="social-menu-container">
          <p className="social-menu-text">{title}</p>
          <div className="social-menu-icons">
            <SocialMenu links={data.brandInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface SocialBlockInterface {
  title: any;
}

export default SocialBlock;
