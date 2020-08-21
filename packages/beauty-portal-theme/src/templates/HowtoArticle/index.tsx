import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/Seo';
import Layout from '../../components/Layout';
import RelatedArticles from '../../components/RelatedArticles';
import RichText from '../../components/RichText';
import Breadcrumb from '../../components/Breadcrumb';
import ArticleHeader from '../../components/ArticleHeader';
import ToolList from '../../components/ToolList';
import ProductList from '../../components/ProductList';
import Tags from '../../components/Tags';
import ReadNext from '../../components/ReadNext';
import PageSchema from '../../components/PageSchema';
import OGTags from '../../components/OGTags';

const HowtoArticlePage = (props: HowtoArticlePageProps) => {
  const {
    data: {
      page,
      galleryArticles: { nodes: galleryNodes },
      featureArticles: { nodes: featureNodes },
      howToArticles: { nodes: howToNodes },
      brandInfo,
      genericLabels,
      sectionTitles,
    },
  } = props;

  const relatedArticles = [...galleryNodes, ...featureNodes, ...howToNodes];

  page.seo = page.seo || {};

  return (
    <Layout>
      <SEO
        lang={'en-us'}
        title={page.seo.metaTitle}
        description={page.seo.metaDescription}
        keywords={page.seo.metaKeywords}
      />
      <Breadcrumb tag={page.tags[0]} pageTitle={page.headline} />
      <PageSchema
        type={'HowTo'}
        name={page.headline}
        description={page.subheading}
        slug={page.path}
        image={{
          url: page.heroImage.asset.url,
          width: page.heroImage.asset.metadata.dimensions.width,
          height: page.heroImage.asset.metadata.dimensions.height,
        }}
        data={page}
      />
      <OGTags type={'article'} slug={page.path} data={page} />
      <div className="bp-container">
        <div className="col-container">
          <div className="col col-7">
            <ArticleHeader
              article={page}
              type={'howto'}
              socialLinks={brandInfo}
              playLabel={genericLabels.play}
            />
            {page.toolList && (
              <ToolList data={page.toolList} title={sectionTitles.toolName} />
            )}
            {page.productList && (
              <ProductList
                data={page._rawProductList}
                title={sectionTitles.productName}
              />
            )}
            <RichText data={page._rawHowTobody} />
            {page.readnext && (
              <ReadNext data={page} title={sectionTitles.nextRead} />
            )}
          </div>
          <div className="col col-1"></div>
          <div className="col col-4">
            {relatedArticles.length !== 0 && (
              <RelatedArticles
                articles={relatedArticles}
                title={sectionTitles.relatedArticlesName}
              />
            )}
          </div>
        </div>
        <Tags data={page.tags} title={sectionTitles.relatedTopicsName} />
      </div>
    </Layout>
  );
};

export default HowtoArticlePage;

export const query = graphql`
  query($slug: String!, $tags: [String!], $id: [String!]) {
    galleryArticles: allSanityGalleryArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...GalleryFieldsTile
      }
    }

    howToArticles: allSanityHowToArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...HowToFieldsTile
      }
    }

    featureArticles: allSanityFeatureArticle(
      filter: { tags: { elemMatch: { name: { in: $tags } } }, id: { nin: $id } }
      limit: 10
      sort: { fields: _createdAt, order: DESC }
    ) {
      nodes {
        ...FeatureFieldsTile
      }
    }
    page: sanityHowToArticle(slug: { current: { eq: $slug } }) {
      ...HowToFieldsFull
    }
    brandInfo: sanityBrandInfo {
      twitterurl
      youtubeurl
      facebookurl
      instaurl
    }
    genericLabels: sanityGlobalLabels {
      play
    }
    sectionTitles: sanityHowToTemplate {
      name
      nextRead
      productName
      relatedArticlesName
      relatedTopicsName
      toolName
    }
  }
`;

interface HowtoArticlePageProps {
  data: {
    page: any;
    galleryArticles: any;
    featureArticles: any;
    howToArticles: any;
    brandInfo: any;
    genericLabels: any;
    sectionTitles: any;
  };
  pageContext: {
    slug: string;
    title: string;
  };
  location: WindowLocation;
}
