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
    <section className="bp-bannervideoaltcontrols" data-cy="bannerVideoBlock">
      <div className="video-altcontrols">
        <video
          src={videoAsset.video.asset.url}
          width="auto"
          height="auto"
          controls
          muted
          loop
          preload="auto"
          className="video-altcontrols_player"
        >
          <meta itemProp="description" content={videoAsset.alt}></meta>
        </video>
      </div>
      <div className="bp-bannervideoaltcontrols_optional">
        {(headline || subheading || _rawBody) && (
          <div className="bp-bannervideoaltcontrols_copy">
            <h2 className="bp-bannervideoaltcontrols_heading">
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
          <div
            className="bp-bannervideoaltcontrols_cta-link"
            data-cy="bannerVideoLink"
          >
            <Link to={ctaUrl || '/'}>
              <button
                className="bp-bannervideoaltcontrols_cta"
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
