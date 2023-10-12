export const constantRoutes = [//常量路由
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login',
        meta: {
            title: '登录',
            hidden: true,
            icon: ''
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'layout',
        meta: {
            title: '首页',
            hidden: false,
            icon: 'HomeFilled'
        },
        redirect: '/login',
        children: [
            {
                path: '/home',
                component: ()=>import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: true,
                    icon: 'HomeFilled'
                }
            }
        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'Hide'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/login',
        name: 'Any',
        meta: {
            title: '任意路由',
            hidden: true,
            icon: ''
        }
    },
    {
        path: '/screen',
        name: 'Screen',
        component: ()=> import('@/views/screen/index.vue'),
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Monitor'
        }
    },
    {
        path: '/acl',
        name: 'Acl',
        redirect: '/acl/user',
        component: ()=>import('@/layout/index.vue'),
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Edit'
        },
        children: [
            {
                path: '/acl/user',
                name: 'User',
                component: ()=>import('@/views/acl/user/index.vue'),
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/acl/role',
                name: 'Role',
                component: ()=>import('@/views/acl/role/index.vue'),
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/acl/permission',
                name: 'Permission',
                component: () => import('@/views/acl/permission/index.vue'),
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Menu'
                }
            }
        ]
    },
    {
        path: '/product',
        name: 'Product',
        redirect: '/product/attr',
        component: ()=>import('@/layout/index.vue'),
        meta: {
            title: '商品管理',
            hidden: false,
            icon: 'Goods'
        },
        children: [
            {
                path: '/product/attr',
                name: 'Attr',
                component: () => import('@/views/product/attr/index.vue'),
                meta: {
                    title: '属性管理',
                    hidden: false,
                    icon: 'Discount'
                }
            },
            {
                path: '/product/sku',
                name: 'Sku',
                component: ()=>import('@/views/product/sku/index.vue'),
                meta: {
                    title: 'Sku管理',
                    hidden: false,
                    icon: 'User'
                }
            },
            {
                path: '/product/spu',
                name: 'Spu',
                component: () => import('@/views/product/spu/index.vue'),
                meta: {
                    title: 'Spu管理',
                    hidden: false,
                    icon: 'UserFilled'
                }
            },
            {
                path: '/product/tradmark',
                name: 'Tradmark',
                component: () => import('@/views/product/tradmark/index.vue'),
                meta: {
                    title: '商标管理',
                    hidden: false,
                    icon: 'Menu'
                }
            }
        ]
    },
]