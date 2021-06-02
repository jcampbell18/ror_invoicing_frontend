import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/pages/Dashboard'
import Clients from '@/pages/Clients'
import ProjectSites from '@/pages/ProjectSites'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/clients',
            name: 'Clients',
            component: Clients
        },
        {
            path: '/project_sites',
            name: 'ProjectSites',
            component: ProjectSites
        }
    ]
})
