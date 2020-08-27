import { MdVideoLibrary } from 'react-icons/md'

export default {
  name: 'bannerBlockType',
  type: 'document',
  icon: MdVideoLibrary,
  title: 'Banner Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Banner Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Banner Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'MdVideoLibrary'
    }
  }
}
