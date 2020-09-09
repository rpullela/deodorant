import { FaYoutube } from 'react-icons/fa'

export default {
  name: 'videoAsset',
  type: 'object',
  icon: FaYoutube,
  title: 'Video Asset',
  fields: [
    {
      name: 'video',
      type: 'file',
      title: 'Uploaded Video Asset'
    },
    {
      name: 'videoUrl',
      title: 'video URL',
      type: 'string',
      description: 'Optional: Add a destination for your video'
    },
    {
      name: 'alt',
      title: 'Alt Text *',
      description: 'For accessibility purposes, please describe the image',
      type: 'string',
      validation: Rule => Rule.required(),
      options: {
        isHighlighted: true
      }
    }
  ]
}
