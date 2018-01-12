import HomeView from 'view/home';
import ListView from 'view/list';
import DetailView from 'view/detail';
import NewView from 'view/new';
export default [
  {
    exact: true,
    name: 'home',
    path: '/',
    component: HomeView,
  }, {
    exact: true,
    name: 'list',
    path: '/list',
    component: ListView,
  }, {
    exact: true,
    name: 'detail',
    path: '/detail',
    component: DetailView,
  }, {
    exact: true,
    name: 'new',
    path: '/new',
    component: NewView,
  }
]
