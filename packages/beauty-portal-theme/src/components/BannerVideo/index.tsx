import React, { FunctionComponent, useState } from 'react';
import { getYouTubeId } from '../../helpers/youtube';
import { Link } from 'gatsby';
import { BannerVideoInterface } from './models';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { ReactComponent as IconYoutube } from '../../images/icons/youtube.svg';
import { ReactComponent as Loader } from '../../images/icons/loader.svg';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import './styles.scss';

const BannerVideo: FunctionComponent<BannerVideoInterface> = ({
  videoBlock,
  subheading,
  headline,
  ctaLabel,
  ctaUrl,
  _rawBody,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);
  const [showVideoCopy, setVideoCopy] = useState(true);
  const playVideo = (event: any) => {
    setVideoLoading(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${getYouTubeId(
        event.currentTarget.dataset.url
      )}`
    );
    setShowVideo(true);
    setVideoCopy(false);
  };

  const onFrameLoad = () => {
    setVideoLoading(false);
  };

  const hideVideoCopy = showVideoCopy === false ? { display: 'none' } : {};

  return (
    <section className="bp-bannervideo" data-cy="bannerVideoBlock">
      <div onClick={playVideo} className="bp-bannervideo_link">
        <h2 className="bp-bannervideo_title">{videoBlock.youTubeCaption}</h2>
        <div className="bp-bannervideo_image" data-cy="bannerVideoImage">
          {!showVideo && (
            <figure>
              <picture
                className="bp-bannerimage__placeholder"
                style={{
                  paddingTop: `56.25%`,
                  background: `url(${videoBlock.heroImage.asset.url})`,
                  backgroundSize: 'cover',
                }}
              >
                <source
                  media="screen and (min-width: 1025px)"
                  srcSet={`${urlFor(videoBlock.heroImage)
                    .quality(80)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <source
                  media="screen and (min-width: 560px)"
                  srcSet={`${urlFor(videoBlock.heroImage)
                    .quality(80)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <source
                  media="screen and (min-width: 320px)"
                  srcSet={`${urlFor(videoBlock.heroImage)
                    .width(414)
                    .height(232)
                    .fit('max')
                    .auto('format')
                    .url()
                    .toString()}`}
                />
                <img
                  src={urlFor(videoBlock.heroImage)
                    .width(436)
                    .height(245)
                    .quality(80)
                    .fit('max')
                    .auto('format')
                    .url()}
                  alt={videoBlock.heroImage.alt}
                />
              </picture>
            </figure>
          )}
          {!showVideo && !videoLoading && (
            <button
              type="button"
              className="bp-bannervideo_icon"
              onClick={playVideo}
              data-url={videoBlock.url}
            >
              <IconYoutube />
              <span className="srOnly">Play Video</span>
            </button>
          )}
          {videoLoading && (
            <div className="bp-preloader">
              <Loader />
            </div>
          )}
          {showVideo && (
            <iframe
              width="560"
              height="600"
              src={videoSourceUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={onFrameLoad}
            ></iframe>
          )}
        </div>
      </div>
      <div style={hideVideoCopy}>
        {(headline || subheading || _rawBody) && (
          <div className="bp-bannervideo_copy">
            <h2 className="bp-bannervideo_heading">
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
          <div className="bp-bannervideo_cta-link" data-cy="bannerVideoLink">
            <Link to={ctaUrl || '/'}>
              <button
                className="bp-bannervideo_cta"
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

export default BannerVideo;
