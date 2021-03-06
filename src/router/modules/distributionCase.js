import Layout from '@/layout/distributionCase'
import {
  rolesPerm
} from '@/utils/constantVariable'

const distributionCaseRouter = {
  path: '/distribution-case',
  component: Layout,
  redirect: '/distribution-case/map',
  meta: {
    title: 'distribution_case',
    icon: 'mdi-map-marker-radius',
    roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA]
  },
  active: false,
  children: [
    {
      path: '/distribution-case/map',
      component: () => import('@/views/distributionCase/mapv2'),
      meta: {
        title: 'distribution_case_map',
        icon: 'mdi-map-marker-radius',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA]
      }
    },
    {
      path: '/distribution-case/network',
      component: () => import('@/views/distributionCase/networkv2'),
      meta: {
        title: 'distribution_case_network',
        icon: 'location_on',
        child: true,
        noCache: true,
        roles: [rolesPerm.ADMIN, rolesPerm.DINKESPROV, rolesPerm.DINKESKOTA]
      }
    }
  ]
}

export default distributionCaseRouter
