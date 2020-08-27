import React, { FunctionComponent } from 'react';

import { BannerBlockInterface } from './models';
import BannerImage from '../BannerImage';
import BannerVideo from '../BannerVideo';

const componentMap = {
  image: BannerImage,
  video: BannerVideo,
  default: BannerImage,
};

const BannerBlock: FunctionComponent<BannerBlockInterface> = ({
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
