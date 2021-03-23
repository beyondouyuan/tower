import HomePage from '../pages/home'
import ManagerPage from '../pages/manager'
import StatisticsPage from '../pages/statistics'
import TemplatesPage from '../pages/templates'
import AboutPage from '../pages/about'
import DocumentPage from '../pages/document'
import NotFoundPage from '../pages/not-found'

const routes = [{
  path: '/',
  component: HomePage,
  exact: true
}, {
  path: '/manager',
  component: ManagerPage,
  exact: true
}, {
  path: '/manager/statistics',
  component: StatisticsPage,
  exact: false
}, {
  path: '/manager/templates',
  component: TemplatesPage,
  exact: false
}, {
  path: '/document',
  component: DocumentPage,
  exact: false
}, {
  path: '/404',
  component: NotFoundPage,
  exact: false
}, {
  path: '/about',
  component: AboutPage,
  exact: false
}]

export default routes
