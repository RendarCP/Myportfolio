import Vue from 'vue';
import VueRouter from 'vue-router';
import MainHome from '../views/Home.vue'
import ProfilePage from '../views/Profile.vue';
import MainBody from '../views/Portfolio.vue';
import MainFooter from '../views/Contactme.vue';
import FileUploader from '../views/fileuploader.vue'

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
        },
        {
            path:'/edit',
            component: FileUploader,
        }
    ],
})