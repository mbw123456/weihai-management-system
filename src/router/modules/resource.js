/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const nestedRouter = {
  path: '/resource',
  component: Layout,
  redirect: '/resource/serve',
  name: 'Resource',
  meta: {
    title: '资源管理',
    icon: 'nested'
  },
  children: [
    {
      path: 'serve',
      name: 'Serve',
      component: () => import('@/views/resource/serve/index'),
      meta: { title: '服务主体认证管理' }
    },
    {
      path: 'business',
      component: () => import('@/views/resource/business/index'), // Parent router-view
      name: 'Business',
      meta: { title: '企业库' },
      redirect: '/resource/business/business-lot',
      children: [
        {
          path: 'business-lot',
          component: () => import('@/views/resource/business/business-lot/index'),
          name: 'Business-lot',
          meta: { title: '企业库管理' }
        },
        {
          path: 'business-manage',
          component: () => import('@/views/resource/business/business-manage/index'),
          name: 'Business-manage',
          meta: { title: '批量处理' }
        },
        {
          path: 'business-star',
          component: () => import('@/views/resource/business/business-manage/business-star/index'),
          name: 'Business-manage',
        },
      ]
    },
    {
      path: 'professor',
      component: () => import('@/views/resource/professor/index'), // Parent router-view
      name: 'Professor',
      meta: { title: '专家库' },
      redirect: '/resource/professor/professor-lot',
      children: [
        {
          path: 'professor-lot',
          component: () => import('@/views/resource/professor/professor-lot/index'),
          name: 'professor-lot',
          meta: { title: '专家库管理' }
        },
        {
          path: 'professor-manage',
          component: () => import('@/views/resource/professor/professor-manage/index'),
          name: 'professor-manage',
          meta: { title: '批量处理' }
        },
        {
          path: 'professor-star',
          component: () => import('@/views/resource/professor/professor-manage/professor-star/index'),
          name: 'professor-manage',
        },
      ]
    },
    {
      path: 'talent',
      component: () => import('@/views/resource/talent/index'), // Parent router-view
      name: 'Talent',
      meta: { title: '高技术人才库' },
      redirect: '/resource/talent/talent-lot',
      children: [
        {
          path: 'talent-lot',
          component: () => import('@/views/resource/talent/talent-lot/index'),
          name: 'talent-lot',
          meta: { title: '高技术人才库管理' }
        },
        {
          path: 'talent-manage',
          component: () => import('@/views/resource/talent/talent-manage/index'),
          name: 'talent-manage',
          meta: { title: '批量处理' }
        },
        {
          path: 'talent-star',
          component: () => import('@/views/resource/talent/talent-manage/talent-star/index'),
          name: 'talent-manage',
        },
      ]
    },
    {
      path: 'science',
      component: () => import('@/views/resource/science/index'), // Parent router-view
      name: 'Science',
      meta: { title: '科研院所' },
      redirect: '/resource/science/science-lot',
      children: [
        {
          path: 'science-lot',
          component: () => import('@/views/resource/science/science-lot/index'),
          name: 'science-lot',
          meta: { title: '科研院所管理' }
        },
        {
          path: 'science-manage',
          component: () => import('@/views/resource/science/science-manage/index'),
          name: 'science-manage',
          meta: { title: '批量处理' }
        },
        {
          path: 'science-star',
          component: () => import('@/views/resource/science/science-manage/science-star/index'),
          name: 'science-manage',
        },
      ]
    },
  ]
}

export default nestedRouter
