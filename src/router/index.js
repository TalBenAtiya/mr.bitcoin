import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import ContactDetails from '../views/ContactDetails.vue'
import Statistics from '../views/Statistics.vue'
import ContactEdit from '../views/ContactEdit.vue'
import Login from '../views/Login.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    
    },
    {
      path: '/contacts/:contactId',
      name: 'details',
      component: ContactDetails
     
    },
    {
      path: '/contacts/edit/:contactId',
      name: 'edit',
      component: ContactEdit
     
    }
  ]
})

export default router
