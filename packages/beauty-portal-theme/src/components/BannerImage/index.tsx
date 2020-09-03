import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { urlFor } from '../../helpers/imageUrl';
import BlockContent from '@sanity/block-content-to-react';
import { BannerImageInterface } from './models';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';

import './styles.scss';

const BannerImage: FunctionComponent<BannerImageInterface> = ({
  name,
  subheading,
  headline,
  _rawImage,
  _rawBody,
  ctaLabel,
  ctaUrl,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px',
  });
  const Image = (
    <figure ref={ref} data-inview={inView}>
      {inView ? (
        <>
          <link
            rel="preload"
            as="image"
            href={`${urlFor(_rawImage)
              .width(559)
              .height(314)
              .quality(80)
              .fit('max')
              .auto('format')
              .url()
              .toString()}`}
          />
          <picture
            className="bp-image__placeholder"
            style={{
              paddingTop: `56.25%`,
              background: `url(${_rawImage.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          >
            <img src={urlFor(_rawImage).url()} alt={_rawImage.alt} />
          </picture>
        </>
      ) : null}
    </figure>
  );

  return (
    <section data-cy="bannerImageBlock">
      <Link to={`${ctaUrl}` || '/'}>
        <div className="bp-bannerImageBlock_image" data-cy="bannerImage">
          {Image}
        </div>
      </Link>
      {(headline || subheading || _rawBody) && (
        <div className="bp-bannerImageBlock_copy">
          <h2 className="bp-bannerImageBlock_title">
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
        <div className="bp-bannerImageBlock_cta-link">
          <Link to={`${ctaUrl}`}>
            <button className="bp-bannerImageBlock_cta">{ctaLabel}</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BannerImage;
