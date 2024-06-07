import HomeView from '@/views/HomeView.vue'

export default [
  {
    path: '/:path(.*)*',
    name: '404',
    component: () => HomeView, // import('@/views/NotFoundView.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/test/styling',
    name: 'styling test',
    component: () => HomeView, // import('@/views/StylingTestView.vue'),
  },
  {
    path: '/config',
    name: 'config',
    component: () => HomeView, // import('@/views/ConfigView.vue'),
  },
  {
    path: '/replugged',
    name: 'replugged',
    component: () => HomeView, // import('@/views/RepluggedView.vue'),
  },
  {
    path: '/shelter',
    name: 'shelter',
    component: () => HomeView, // import('@/views/ShelterView.vue'),
  },
  {
    path: '/shelter/plugins',
    name: 'shelter plugins',
    component: () => HomeView, // import('@/views/ShelterPluginsView.vue'),
  },
  {
    path: '/entries/:entry(.*)?',
    name: 'entries',
    component: () => HomeView, // import('@/views/EntriesView.vue'),
  },
]

export const hidden = ['styling test', '404', 'shelter plugins']
