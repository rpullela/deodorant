import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Slider from '../Slider';
import { ArticleTileSliderInterface } from './models';
import { getSearchUrlWithTagsAndCategory } from '../../helpers/searchUrl';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import BlockContent from '@sanity/block-content-to-react';
import './styles.scss';

const ArticleTileSlider: FunctionComponent<ArticleTileSliderInterface> = ({
  slides,
  headline,
  _rawTextBlockBody,
  searchCtaLabel,
  searchTags,
}) => {
  const breakpoints = {
    breakpoints: {
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <div className="bp-slider_tile">
      <div className="section-divider"></div>
      <div className="bp-slider_tile-header">
        <h2 className="bp-slider_tile-title">{headline}</h2>
      </div>
      <div className="bp-slider_tile-section-description">
        {_rawTextBlockBody && (
          <BlockContent
            serializers={blockTypeDefaultSerializers}
            blocks={_rawTextBlockBody}
          />
        )}
      </div>
      <Slider
        type="tile"
        slides={slides}
        spaceBetween={30}
        slidesPerView={4}
        speed={700}
        threshold={5}
        lazy={true}
        preloadImages={false}
        freeMode={true}
        watchSlidesVisibility={true}
        breakpoints={breakpoints}
      />
      <div className="bp-slider_tile-articleNav">
        {searchCtaLabel && (
          <Link
            className="bp-slider_tile-link"
            to={getSearchUrlWithTagsAndCategory(searchTags)}
          >
            {searchCtaLabel}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ArticleTileSlider;
