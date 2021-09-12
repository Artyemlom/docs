module.exports = {
  '/extend/': [
    {
      title: 'Main Concepts',
      collapsable: false,
      children: [
        '',
        'start',
        'frontend',
        'routes',
        'data',
        'distribution',
        'update-b8',
        'update-b10',
        'update-b12',
        'update-b13',
        'update-b14',
      ]
    },
    {
      title: 'Reference Guides',
      collapsable: false,
      children: [
        'frontend-pages',
        'interactive-components',
        'forms',
        'backend-events'
      ]
    },
    {
      title: 'Advanced Guides',
      collapsable: false,
      children: [
        'authorization',
        'console',
        'formatting',
        'i18n',
        'mail',
        'middleware',
        'notifications',
        'permissions',
        'post-types',
        'search',
        'settings',
        'testing',
      ]
    },
    // {
    //   title: 'Themes',
    //   collapsable: false,
    //   children: [
    //     'theme',
    //   ]
    // },
    // {
    //   title: 'Localization',
    //   collapsable: false,
    //   children: [
    //   ]
    // }
  ],

  '/': [
    {
      title: 'Introduction',
      collapsable: false,
      children: [
        '',
        'faq'
      ]
    },
    {
      title: 'Play CitizenIV',
      collapsable: false,
      children: [
        'install',
        'troubleshoot'
      ]
    },
    {
      title: 'Dedicated Server',
      collapsable: false,
      children: [
        'install-server',
        'migrating'
      ]
    },
    {
      title: 'Scripting Reference',
      collapsable: true,
      children: [
        'resource',
	'functions',
	'events'
      ]
    },
    {
      title: 'Streaming Reference',
      collapsable: true,
      children: [
        'cdimages',
	'content'
      ]
    },
    {
      title: 'Game Reference',
      collapsable: true,
      children: [
        'blips',
	'checkpoints',
	'keys',
	'peds',
	'vehicles',
	'vehcols',
	'weapons',
	'weathers'
      ]
    }
  ],
}
