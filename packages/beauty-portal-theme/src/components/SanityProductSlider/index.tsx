import React, { FunctionComponent } from 'react';
import { SanityProductSliderInterface } from './models';
import TileSlider from '../TileSlider';
import './styles.scss';

const SanityProductSlider: FunctionComponent<SanityProductSliderInterface> = ({
  name,
  slides,
  headline,
  _rawTextBlockBody,
  searchCtaLabel,
  searchTags,
}) => {
  console.log(searchCtaLabel);
  return (
    <section className="bp-productSlider">
      <div style={{ height: '150px', overflow: 'hidden', margin: '-70px' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M00.00,25.27 C280.83,192.92 304.30,-70.39 500.00,89.03 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: 'none', fill: 'white' }}
          ></path>
        </svg>
      </div>
      <div className="bp-container">
        <div className="bp-background-wave">
          <TileSlider
            name={name}
            slides={slides}
            headline={headline}
            _rawTextBlockBody={_rawTextBlockBody}
            searchTags={searchTags}
            searchCtaLabel={searchCtaLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default SanityProductSlider;
