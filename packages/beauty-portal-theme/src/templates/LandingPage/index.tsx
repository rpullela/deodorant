import React from 'react';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import LandingSectionRenderer from '../../components/LandingSectionRenderer';
import PageSchema from '../../components/PageSchema';
import OGTags from '../../components/OGTags';
import Breadcrumb from '../../components/Breadcrumb';
import { blockTypeDefaultSerializers } from '../../helpers/sanity';
import './styles.scss';
import SiteMap from '../../components/SiteMap';

const LandingPage = (props: LandingPageProps) => {
  const {
    data: { page },
  } = props;

  page.seo = page.seo || {};

  const site = {};

  const getLayoutClassName = type => {
    return type.replace(/\s/g, '-').toLowerCase();
  };

  return (
    <Layout className={getLayoutClassName(page.name)}>
      <SEO
        lang={'en-us'}
        title={page.name}
        description={site.description}
        keywords={site.keywords}
      />
      <PageSchema
        type={'WebPage'}
        name={page.name}
        description={page.name}
        slug={page.path}
        data={page}
      />
      <OGTags type={'page'} slug={page.path} data={page} />
      {page.landingSections
        .filter(section => section.__typename === 'SanityBannerBlock')
        .map((section, index) => (
          <LandingSectionRenderer
            key={section.id}
            section={section}
            preferPerformance={index <= 1}
          />
        ))}
      {page.path !== '/' && <Breadcrumb pageTitle={page.name} />}
      {(page.headline || page._rawIntroduction) && (
        <div className="bp-container">
          <div className="bp-page_section">
            {page.headline && (
              <h1 className="bp-page_section-title">{page.headline}</h1>
            )}
            {page._rawIntroduction && (
              <BlockContent
                serializers={blockTypeDefaultSerializers}
                blocks={page._rawIntroduction}
              />
            )}
            {page.name &&
              (page.name.toLowerCase() === 'sitemap' ||
                page.name.toLowerCase() === 'site map') && <SiteMap />}
          </div>
        </div>
      )}
      {page.landingSections
        .filter(section => section.__typename !== 'SanityBannerBlock')
        .map((section, index) => (
          <LandingSectionRenderer
            key={section.id}
            section={section}
            preferPerformance={index <= 1}
          />
        ))}
    </Layout>
  );
};

export default LandingPage;

export const query = graphql`
  query($id: String!) {
    page: sanityLandingPage(id: { eq: $id }) {
      ...LandingPageFieldsFull
    }
  }
`;

interface LandingPageProps {
  data: {
    page: any;
  };
  pageContext: {
    id: string;
    slug: string;
    title: string;
  };
}
