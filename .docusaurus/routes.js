import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '2e6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '220'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '232'),
            routes: [
              {
                path: '/docs/category/features',
                component: ComponentCreator('/docs/category/features', 'ff0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', '20e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/certificates',
                component: ComponentCreator('/docs/features/certificates', '2f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/configuration',
                component: ComponentCreator('/docs/features/configuration', '750'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/Docker',
                component: ComponentCreator('/docs/features/Docker', '06b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/nginx',
                component: ComponentCreator('/docs/features/nginx', '3d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/routes',
                component: ComponentCreator('/docs/features/routes', '642'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/shop',
                component: ComponentCreator('/docs/features/shop', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/tasks',
                component: ComponentCreator('/docs/features/tasks', 'f55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/features/user_management',
                component: ComponentCreator('/docs/features/user_management', '8c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/configure_BOOST',
                component: ComponentCreator('/docs/tutorial-basics/configure_BOOST', 'f26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/tutorial-basics/congratulations', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create_priv_route',
                component: ComponentCreator('/docs/tutorial-basics/create_priv_route', '173'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create_product',
                component: ComponentCreator('/docs/tutorial-basics/create_product', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create_public_route',
                component: ComponentCreator('/docs/tutorial-basics/create_public_route', '37e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/create_task',
                component: ComponentCreator('/docs/tutorial-basics/create_task', 'f02'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
