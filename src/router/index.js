import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/contractTempleteManagement',
    meta: { title: '合同制作' },
    children: [{
      path: 'contractTempleteManagement',
      name: 'ContractTempleteManagement',
      component: () => import('@/views/createContract/contractTempleteManagement'),
      meta: { title: '合同模板管理' }
    },
    {
      path: 'contractTextManagement',
      name: 'ContractTextManagement',
      component: () => import('@/views/createContract/contractTextManagement'),
      meta: { title: '合同文本管理' }
    }]
  },

  {
    path: '/standardVerify',
    component: Layout,
    redirect: '/standardVerify/contractTempleteVerify',
    meta: { title: '规范审核' },
    children: [
      {
        path: 'contractTempleteVerify',
        name: 'ContractTempleteVerify',
        component: () => import('@/views/standardVerify/contractTempleteVerify'),
        meta: { title: '合同模板审核' }
      },
      {
        path: 'contractTextVerify',
        name: 'ContractTextVerify',
        component: () => import('@/views/standardVerify/contractTextVerify'),
        meta: { title: '合同文本审核' }
      },
      {
        path: 'templeteVariableManagement',
        name: 'TempleteVariableManagement',
        component: () => import('@/views/standardVerify/templeteVariableManagement'),
        meta: { title: '模板变量管理' }
      },
      {
        path: 'contractTempleteStandard',
        name: 'ContractTempleteStandard',
        component: () => import('@/views/standardVerify/contractTempleteStandard'),
        meta: { title: '合同模板规范' }
      },
      {
        path: 'mailTempleteManagement',
        name: 'MailTempleteManagement',
        component: () => import('@/views/standardVerify/mailTempleteManagement'),
        meta: { title: '邮件模板管理' }
      }
    ]
  },

  {
    path: '/printSend',
    component: Layout,
    redirect: '/printSend/printContract',
    meta: { title: '打印寄送' },
    children: [{
      path: 'printContract',
      name: 'PrintContract',
      component: () => import('@/views/printSend/printContract'),
      meta: { title: '打印合同文本' }
    },
    {
      path: 'sendContract',
      name: 'SendContract',
      component: () => import('@/views/printSend/sendContract'),
      meta: { title: '寄送合同文本' }
    },
    {
      path: 'verifyMailInfo',
      name: 'VerifyMailInfo',
      component: () => import('@/views/printSend/verifyMailInfo'),
      meta: { title: '邮寄信息核对' }
    }]
  },

  {
    path: '/trackFile',
    component: Layout,
    redirect: '/trackFile/recordContractStatus',
    meta: { title: '追踪归档' },
    alwaysShow: true,
    children: [{
      path: 'recordContractStatus',
      name: 'RecordContractStatus',
      component: () => import('@/views/trackFile/recordContractStatus'),
      meta: { title: '合同状态记录' }
    }]
  },

  {
    path: '/systemManagement',
    component: Layout,
    redirect: '/systemManagement/userAuthManagement',
    meta: { title: '系统管理' },
    children: [{
      path: 'userAuthManagement',
      name: 'UserAuthManagement',
      component: () => import('@/views/systemManagement/userAuthManagement'),
      meta: { title: '用户权限管理' }
    },
    {
      path: 'signUserManagement',
      name: 'SignUserManagement',
      component: () => import('@/views/systemManagement/signUserManagement'),
      meta: { title: '签署人员管理' }
    },
    {
      path: 'contractProperRegular',
      name: 'ContractProperRegular',
      component: () => import('@/views/systemManagement/contractProperRegular'),
      meta: { title: '合同适用规则' }
    },
    {
      path: 'infoCheckTip',
      name: 'InfoCheckTip',
      component: () => import('@/views/systemManagement/infoCheckTip'),
      meta: { title: '信息核对提醒' }
    }]
  },

  {
    path: '/signContract',
    redirect: '/signContract/signContract',
    component: Layout,
    meta: { title: '合同签署' },
    alwaysShow: true,
    children: [{
      path: 'signContract',
      name: 'SignContract',
      component: () => import('@/views/signContract/signContract'),
      meta: { title: '合同电子签署' }
    }]
  },

  {
    path: '/reportList',
    redirect: '/reportList/reportList',
    component: Layout,
    meta: { title: '报表查询' },
    alwaysShow: true,
    children: [{
      path: 'reportList',
      name: 'ReportList',
      component: () => import('@/views/reportList/reportList'),
      meta: { title: 'TBD' }
    }]
  },

  {
    path: '/todoList',
    component: Layout,
    redirect: '/todoList/todoList',
    meta: { title: '代办事项' },
    children: [{
      path: 'todoList',
      name: 'TodoList',
      component: () => import('@/views/todoList/todoList'),
      meta: { title: '代办事项清单' }
    },
    {
      path: 'mailUpdateRequest',
      name: 'MailUpdateRequest',
      component: () => import('@/views/todoList/mailUpdateRequest'),
      meta: { title: '邮件更新请求' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
