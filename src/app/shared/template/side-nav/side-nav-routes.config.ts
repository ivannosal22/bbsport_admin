import { SideNavInterface } from '../../interfaces/side-nav.type';
export const DashboardRoutes: SideNavInterface[] = [
    {
        path: '/super-admin/dashboard',
        title: 'Dashboard',
        iconType: 'nzIcon',
        iconTheme: 'outline',
        icon: 'dashboard',
        submenu: []
    },
    {
        path: '/super-admin/view-stadium',
        title: 'View Stadium',
        iconType: 'nzIcon',
        icon: 'eye',
        iconTheme: 'outline',
        submenu: []
    },
    {
        path: '/super-admin/add-stadium',
        title: 'Add Stadium',
        iconType: 'nzIcon',
        icon: 'plus',
        iconTheme: 'outline',
        submenu: []
    },
    {
        path: '/super-admin/promotion',
        title: 'Add Promotion',
        iconType: 'nzIcon',
        icon: 'notification',
        iconTheme: 'outline',
        submenu: []
    },
    {
        path: '/super-admin/users',
        title: 'Users',
        iconType: 'nzIcon',
        icon: 'user',
        iconTheme: 'outline',
        submenu: []
    },
    {
        path: '/super-admin/reports',
        title: 'Reports',
        iconType: 'nzIcon',
        icon: 'rise',
        iconTheme: 'outline',
        submenu: []
    },
    {
        path: '/super-admin/about-us',
        title: 'Pages',
        iconType: 'nzIcon',
        icon: 'form',
        iconTheme: 'outline',
        submenu: [
            {
                path: '/super-admin/about-us',
                title: 'About Us',
                iconType: 'nzIcon',
                icon: 'info-circle',
                iconTheme: 'outline',
                submenu: []
            },
            {
                path: '/super-admin/privacy',
                title: 'Privacy Policy',
                iconType: 'nzIcon',
                icon: 'safety',
                iconTheme: 'outline',
                submenu: []
            }
        ]
    }
]
