import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { BannerVideoAltControlsInterface } from './models';
import BlockContent from '@sanity/block-content-to-react';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import './styles.scss';

const BannerVideoAltControls: FunctionComponent<BannerVideoAltControlsInterface> = ({
  videoAsset,
  subheading,
  headline,
  ctaLabel,
  ctaUrl,
  _rawBody,
}) => {
  return (
    <section className="bp-bannervideoalt" data-cy="bannerVideoBlock">
      <div className="video-alt">
        <video
          src={videoAsset.video.asset.url}
          width="auto"
          height="auto"
          controls
          muted
          loop
          preload="auto"
          className="video-alt_player"
        />
      </div>
      <div className="bp-bannervideoalt_optional">
        {(headline || subheading || _rawBody) && (
          <div className="bp-bannervideoalt_copy">
            <h2 className="bp-bannervideoalt_heading">
              <span>{headline}</span>
            </h2>
            <h3>
              <span>{subheading}</span>
            </h3>
            <BlockContent
              serializers={blockTypeDefaultSerializers}
              blocks={_rawBody}
            />
          </div>
        )}
        {ctaLabel && ctaUrl && (
          <div className="bp-bannervideoalt_cta-link" data-cy="bannerVideoLink">
            <Link to={ctaUrl || '/'}>
              <button
                className="bp-bannervideoalt_cta"
                data-cy="bannerVideoButton"
              >
                {ctaLabel}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BannerVideoAltControls;
