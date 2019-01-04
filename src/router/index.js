import Vue from 'vue';
import VueRouter from 'vue-router';
import MainHome from '../views/pf-home.vue'
import ProfilePage from '../views/pf-profile.vue';
import MainBody from '../views/pf-body.vue';
import MainFooter from '../views/pf-footer.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            component: MainHome,
        },
        {
            path:'/aboutme',
            component: ProfilePage,
        },
        {
            path:'/portfolio',
            component: MainBody,
        },
        {
            path:'/contactme',
            component: MainFooter,
        }
    ],
})