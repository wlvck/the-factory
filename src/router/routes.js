const home = () => import('../pages/home.vue')
const favorites = () => import('../pages/favorites.vue')
const imageDetail = () => import('../pages/imageDetail.vue')

export const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: favorites
    },
    {
        path: '/image/:id',
        name: 'imageDetail',
        component: imageDetail
    },
];