/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const requirementRouter = [{
  path: '/service',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/service/index'),
      name: 'service-index',
      meta: { title: '服务管理', icon: 'component', affix: true }
    },
  ]
},
{
  path: '/service/card',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/service/card/index'),
      name: 'service-card',
      meta: { title: '服务管理-名片'},
      hidden: true
    },
  ]
},
{
  path: '/service/star',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/service/star/index'),
      name: 'service-star',
      meta: { title: '服务管理-关注数'},
      hidden: true
    },
  ]
},]

export default requirementRouter
