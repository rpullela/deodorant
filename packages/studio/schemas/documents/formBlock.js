import {MdAssignment} from 'react-icons/md'

export default {
  name: 'formBlock',
  type: 'document',
  icon: MdAssignment,
  title: 'Form Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Form Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the form block for page layout'
    },
    {
      name: 'type',
      title: 'Form Block Type',
      type: 'reference',
      to: {
        type: 'formBlockType'
      },
      validation: Rule => Rule.required(),
      description: 'Select Form Block Type'
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline',
      description: 'Add catchy CTA headline'
    },
    {
      name: 'body',
      type: 'textBlockPortableText',
      title: 'Form Body',
      description: 'Short and Sharp Description'
    },
    {
      name: 'ctaLabel',
      type: 'string',
      title: 'CTA Label',
      description: 'Optional: Add catchy CTA Label for buttons. "Submit" used by default'
    },
    {
      name: 'image',
      type: 'figure',
      options: {
        collapsible: true
      },
      title: 'Form Image',
      description: 'Optional: Image may be added if desired'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'type.name'
    }
  }
}
