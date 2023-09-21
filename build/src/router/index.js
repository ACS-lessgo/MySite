import {createRouter,createWebHistory} from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Skills from '../views/Skills.vue'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/Contact',
            component:Contact
        },
        {
            path:'/skills',
            component:Skills
        }
    ]
})

export default router;