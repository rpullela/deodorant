import React, { FunctionComponent } from 'react';
import { LandingSectionRendererInterface } from './models';
import SanityArticleSlider from '../SanityArticleSlider';
import SanityProductSlider from '../SanityProductSlider';
import SanityTextBlock from '../SanityTextBlock';
import NewsletterBlock from '../NewsletterBlock';
import SanityVideoBlock from '../SanityVideoBlock';
import ImageBlock from '../ImageBlock';
import SocialBlock from '../SocialBlock';
import FormBlock from '../FormBlock';
import BannerBlock from '../BannerBlock';

const componentsMap = {
  SanityBannerBlock: BannerBlock,
  SanityArticleSlider: SanityArticleSlider,
  SanityProductSlider: SanityProductSlider,
  SanityTextBlock: SanityTextBlock,
  SanityNewsletterBlock: NewsletterBlock,
  SanityVideoBlock: SanityVideoBlock,
  SanityImageBlock: ImageBlock,
  SanitySocialBlock: SocialBlock,
  SanityFormBlock: FormBlock
};

const LandingSectionRenderer: FunctionComponent<LandingSectionRendererInterface> = ({
  section,
  preferPerformance = false,
}) => {
  const sanityType = section.__typename;
  const getComponent = sanityType => {
    const component = componentsMap[sanityType];

    if (component) {
      return component;
    } else {
      console.info('Unknown block for landing page: ', sanityType);

      return false;
    }
  };

  const Comp = getComponent(sanityType);

  return Comp
    ? React.createElement(Comp, {
        ...section,
        preferPerformance,
      })
    : null;
};

export default LandingSectionRenderer;
