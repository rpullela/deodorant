import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment ProductFieldsFull on SanityProduct {
    brand {
      name
    }
    _rawImage(resolveReferences: { maxDepth: 10 })
    _rawIngredients(resolveReferences: { maxDepth: 10 })
    _rawMarketingDescription(resolveReferences: { maxDepth: 10 })
    _rawUsageDetails(resolveReferences: { maxDepth: 10 })
    _rawRecommendationDetails(resolveReferences: { maxDepth: 10 })
    _rawSuggestionDetails(resolveReferences: { maxDepth: 10 })
    buyNow
    name
    tags {
      name
      tagCategory {
        name
      }
    }
    tagLine
    ctaDescription
  }
`;

export const query2 = graphql`
  fragment ProductFieldsTile on SanityProduct {
    _rawImage(resolveReferences: { maxDepth: 10 })
    id
    name
    slug {
      current
    }
    path
  }
`;
