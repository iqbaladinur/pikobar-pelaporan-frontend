import Layout from '@/layout'
import {
  rolesPerm
} from '@/utils/constantVariable'

const closeContactRouter = {
  path: '/close-contact',
  component: Layout,
  redirect: '/close-contact/list',
  meta: {
    title: 'tight_contact',
    icon: 'mdi-account-multiple-outline',
    roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
  },
  active: false,
  children: [
    // {
    //   path: '/close-contact/create',
    //   component: () => import('@/views/closeContactCase/listCreate'),
    //   meta: {
    //     title: 'make_report',
    //     icon: 'mdi-account-multiple-outline',
    //     child: true,
    //     noCache: true,
    //     roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
    //   }
    // },
    {
      path: '/close-contact/list',
      component: () => import('@/views/closeContactCase/listIdentification'),
      meta: {
        title: 'list_identification',
        icon: 'mdi-account-multiple-outline',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
      }
    }
  ]
}

export default closeContactRouter
