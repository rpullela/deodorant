import React, { FunctionComponent } from 'react';

import { BannerBlockInterface } from './models';
import BannerImage from '../BannerImage';
import BannerVideo from '../BannerVideo';
import BannerVideoAlt from '../BannerVideoAlt';

const componentMap = {
  image: BannerImage,
  video: BannerVideo,
  videoAlt: BannerVideoAlt,
  default: BannerImage,
};

const BannerBlock: FunctionComponent<BannerBlockInterface> = ({
  videoAsset,
  videoBlock,
  name,
  headline,
  subheading,
  ctaLabel,
  ctaUrl,
  type,
  _rawImage,
  _rawBody,
  id,
  image,
  url,
  preferPerformance,
}) => {
  const getComponentName = (bannerBlockName: string) => {
    bannerBlockName = type.name.toLowerCase();
    if (bannerBlockName.indexOf('hero image banner') >= 0) return 'image';
    if (bannerBlockName.indexOf('hero video banner') >= 0) return 'video';
    if (bannerBlockName.indexOf('hero video alt banner') >= 0)
      return 'videoAlt';

    return 'default';
  };
  const componentKey = getComponentName(type);
  const Component = componentMap[componentKey];

  return Component ? (
    <section>
      <Component
        {...{
          name,
          headline,
          subheading,
          videoAsset,
          videoBlock,
          type,
          ctaLabel,
          ctaUrl,
          _rawImage,
          _rawBody,
          id,
          image,
          url,
          preferPerformance,
        }}
      />
    </section>
  ) : null;
};

export default BannerBlock;
