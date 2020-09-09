import { graphql } from 'gatsby';

export const query = graphql`
  fragment LandingPageFieldsFull on SanityLandingPage {
    id
    name
    path
    slug {
      current
    }
    headline
    _rawIntroduction(resolveReferences: { maxDepth: 10 })
    landingSections {
      ... on SanityArticleSlider {
        id
        name
        headline
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        searchCtaLabel
        searchTags {
          name
          tagCategory {
            name
          }
        }
        slides {
          ... on SanityFeatureArticle {
            _type
            id
            headline
            subheading
            _rawHeroImage(resolveReferences: { maxDepth: 10 })
            heroImage {
              asset {
                url
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
            path
            slug {
              current
            }
          }
          ... on SanityGalleryArticle {
            _type
            id
            headline
            _rawHeroImage(resolveReferences: { maxDepth: 10 })
            heroImage {
              asset {
                url
              }
              alt
            }
            path
            slug {
              current
            }
          }
          ... on SanityHowToArticle {
            _type
            id
            headline
            _rawHeroImage(resolveReferences: { maxDepth: 10 })
            heroImage {
              asset {
                url
              }
              alt
            }
            heroVideo {
              url
              youTubeCaption
            }
            path
            slug {
              current
            }
          }
        }
        slideType {
          description
          name
        }
      }
      ... on SanityNewsletterBlock {
        id
        name
        ctaLabel
        headline
        _rawBody(resolveReferences: { maxDepth: 10 })
        _rawImage(resolveReferences: { maxDepth: 10 })
        campaignID
        type {
          name
          description
        }
      }
      ... on SanityProductSlider {
        id
        name
        headline
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        searchCtaLabel
        searchTags {
          name
          tagCategory {
            name
          }
        }
        slides {
          _type
          name
          _rawImage(resolveReferences: { maxDepth: 10 })
          image {
            asset {
              source {
                url
              }
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
              }
            }
            alt
          }
          brand {
            name
          }
          path
          slug {
            current
          }
        }
        slideType {
          description
          name
        }
      }
      ... on SanityTextBlock {
        id
        name
        ctaLabel
        ctaUrl
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        textBlockType {
          name
        }
      }
      ... on SanityVideoBlock {
        id
        name
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        videoBlock {
          _type
          url
          youTubeCaption
        }
        _type
      }
      ... on SanityImageBlock {
        id
        name
        _rawImage(resolveReferences: { maxDepth: 10 })
        _rawTextBlockBody(resolveReferences: { maxDepth: 10 })
        url
        imageBlockType {
          name
        }
      }
      ... on SanitySocialBlock {
        id
        title
      }
      ... on SanityFormBlock {
        id
        name
        ctaLabel
        headline
        _rawBody(resolveReferences: { maxDepth: 10 })
        _rawImage(resolveReferences: { maxDepth: 10 })
        type {
          name
        }
      }
      ... on SanityBannerBlock {
        id
        name
        ctaLabel
        ctaUrl
        headline
        subheading
        _rawBody(resolveReferences: { maxDepth: 10 })
        _rawImage(resolveReferences: { maxDepth: 10 })
        videoBlock {
          _type
          url
          youTubeCaption
          heroImage {
            asset {
              url
            }
          }
        }
        videoAsset {
          alt
          videoUrl
          video {
            asset {
              url
            }
          }
        }
        type {
          name
        }
      }
    }
  }
`;
