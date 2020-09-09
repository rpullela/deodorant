import { MdVideoLibrary } from 'react-icons/md'

export default {
  name: 'bannerBlock',
  type: 'document',
  icon: MdVideoLibrary,
  title: 'Banner Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Banner Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the banner block for page layout'
    },
    {
      name: 'type',
      title: 'Banner Block Type',
      type: 'reference',
      to: {
        type: 'bannerBlockType'
      },
      description: 'Select Banner Block Type'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Optional: Add catchy CTA headline'
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      description: 'Optional: Add a subheading to provide more information'
    },
    {
      name: 'body',
      type: 'textBlockPortableText',
      title: 'Banner Body',
      description: 'Optional: Short and Sharp Description'
    },
    {
      name: 'ctaLabel',
      type: 'string',
      title: 'CTA Label',
      description: 'Optional: Add catchy CTA Label for buttons'
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'string',
      description: 'Optional: Add a destination for your CTA'
    },
    {
      name: 'image',
      type: 'figure',
      options: {
        collapsible: true
      },
      title: 'Banner Image',
      description: 'Optional: Image may be added if required'
    },
    {
      name: 'videoBlock',
      type: 'youTube',
      title: 'Video Block',
      description: 'Optional: Add in your youTube video if required'
    },
    {
      name: 'videoAsset',
      type: 'videoAsset',
      title: 'Uploaded video asset',
      description: 'Optional: Add in your uploaded video asset if required'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type.name',
      media: 'MdVideoLibrary'
    }
  }
}
