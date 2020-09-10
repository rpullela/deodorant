import React, { FunctionComponent, useState } from 'react';
import { getYouTubeId } from '../../helpers/youtube';
import { Link } from 'gatsby';
import { BannerVideoYouTubeInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { ReactComponent as IconYoutube } from '../../images/icons/youtube.svg';
import { ReactComponent as Loader } from '../../images/icons/loader.svg';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import './styles.scss';

const BannerVideoYouTube: FunctionComponent<BannerVideoYouTubeInterface> = ({
  videoBlock,
  subheading,
  headline,
  ctaLabel,
  ctaUrl,
  _rawBody,
}) => {
  const videoSourceUrl = `https://www.youtube.com/embed/${getYouTubeId(
    videoBlock.url
  )}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${getYouTubeId(
    videoBlock.url
  )}`;

  return (
    <section className="bp-bannervideoyoutube" data-cy="bannerVideoBlock">
      <div className="video-altyoutube">
        <Link to={videoBlock.url || '/'} className="bp-bannervideoyoutube_link">
          <iframe
            width="560"
            height="600"
            src={videoSourceUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-altyoutube_player"
          ></iframe>
        </Link>
      </div>
      <div className="bp-bannervideoyoutube_optional">
        {(headline || subheading || _rawBody) && (
          <div className="bp-bannervideoyoutube_copy">
            <h2 className="bp-bannervideoyoutube_heading">
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
            className="bp-bannervideoyoutube_cta-link"
            data-cy="bannerVideoLink"
          >
            <Link to={ctaUrl || '/'}>
              <button
                className="bp-bannervideoyoutube_cta"
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

export default BannerVideoYouTube;
