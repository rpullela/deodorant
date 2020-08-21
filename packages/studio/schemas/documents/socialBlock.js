import { MdFavorite } from 'react-icons/md'

export default {
  name: 'socialBlock',
  type: 'document',
  icon: MdFavorite,
  title: 'Social Block',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Social Block Name *',
      validation: Rule => Rule.required(),
      description: 'Name is used to identify the social block for page layout'
    },
    {
        name: 'description',
        type: 'string',
        title: 'Social Block Description',
        description: 'Optional: Provide a description for this social block'
      },
    {
      name: 'title',
      type: 'string',
      title: 'Social Block Title *',
      validation: Rule => Rule.required(),
      description: 'Provide a title to display before the social icons'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}
