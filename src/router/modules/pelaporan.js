import Layout from '@/layout'
import {
  rolesPerm
} from '@/utils/constantVariable'

const reportRouter = {
  path: '/laporan',
  component: Layout,
  redirect: '/laporan/list',
  meta: {
    title: 'laporan_title',
    icon: 'library_books',
    roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
  },
  active: false,
  children: [
    {
      path: '/laporan/create-report',
      component: () => import('@/views/laporan/formCreateReport'),
      meta: {
        title: 'laporan_create',
        icon: 'library_books',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
      }
    },
    {
      path: '/laporan/correct-case-report/:id',
      component: () => import('@/views/laporan/formCreateReport'),
      hidden: true,
      meta: {
        title: 'correct_case_report',
        icon: 'library_books',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
      }
    },
    {
      path: '/laporan/verification',
      component: () => import('@/views/laporan/verification'),
      meta: {
        title: 'verify_case',
        icon: 'library_books',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESKOTA]
      }
    },
    {
      path: '/laporan/verification',
      component: () => import('@/views/laporan/verification'),
      meta: {
        title: 'verification_case_list',
        icon: 'library_books',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.FASKES]
      }
    },
    {
      path: '/laporan/list',
      component: () => import('@/views/laporan/list'),
      meta: {
        title: 'list_case',
        icon: 'library_books',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA, rolesPerm.FASKES]
      }
    }
  ]
}

export default reportRouter
