/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const requirementRouter = [{
  path: '/requirement',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/requirement/index'),
      name: 'requirement-index',
      meta: { title: '需求管理', icon: 'form', affix: true }
    },
  ]
},
{
  path: '/requirement/card',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/requirement/card/index'),
      name: 'requirement-card',
      meta: { title: '需求管理-名片'},
      hidden: true
    },
  ]
},
{
  path: '/requirement/star',
  component: Layout,
  children: [
    {
      path: 'index',
      component: () => import('@/views/requirement/star/index'),
      name: 'requirement-star',
      meta: { title: '需求管理-关注数'},
      hidden: true
    },
  ]
},]

export default requirementRouter
