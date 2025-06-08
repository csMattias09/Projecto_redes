const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/page-one',
    component: () => import('pages/Page_one.vue')
  },
  {
    path: '/page-two',
    component: () => import('pages/Page_two.vue')
  },
  {
    path: '/page-principal',
    component: () => import('pages/Page_prin.vue')
  }
]

export default routes
