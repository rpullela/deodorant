export default {
  widgets: [
    { name: 'structure-menu' },
    { name: 'deploy-github', layout: { height: 'auto' , width: 'medium'} },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent Articles',
        order: '_createdAt desc',
        types: ['howToArticle', 'featureArticle', 'galleryArticle']
      },
      layout: { width: 'medium' }
    },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rpullela/deodorant.git',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'http://fervent-snyder-01f21f.netlify.app',
            category: 'apps'
          }
        ]
      }
    }
  ]
}
