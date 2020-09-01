import {MdAssignment} from 'react-icons/md'

export default {
  name: 'formBlockType',
  type: 'document',
  icon: MdAssignment,
  title: 'Form Block Type',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Form Block Type'
    },
    {
      name: 'description',
      type: 'string',
      title: 'Form Block Description'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description'
    }
  }
}
