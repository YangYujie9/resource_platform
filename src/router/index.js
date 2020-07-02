import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Loginbackstage  from '@/administrator/Loginbackstage'
import Forgotten from '@/components/Forgotten'
import Enrolled from '@/components/Enrolled'
import Demo from '@/components/Demo'
import Reset from '@/components/Reset'
import Home from '@/homepage/Home'
import Played from '@/administrator/Played'
import Rolemanagement from '@/administrator/Rolemanagement'
import Learning from '@/administrator/Learning'
import Discipline from '@/administrator/Discipline'
import Organizational from '@/administrator/Organizational'
import Classmanagement from '@/administrator/Classmanagement'
import Usermanagement from '@/administrator/Usermanagement'
import Rightsmanagement from '@/administrator/Rightsmanagement'
import Sitemanagement from '@/administrator/Sitemanagement'
import Chapterknowledge from '@/administrator/Chapterknowledge'
import Auditing from '@/administrator/Auditing'
import Resource from '@/administrator/Resource'
import Exampool from '@/administrator/Exampool'
import System from '@/administrator/System'

// unusual 
import Formula from '@/administrator/Formula'
import Navigation from '@/administrator/Navigation'
import Information from '@/administrator/Information'


Vue.use(Router)

// const routes= [
//  {
//    path: '/',
//    name: 'Login',
//    component: Login
//  },
// ]



export default new Router({
  mode: 'history',
  routes: [
    //  { path: '/', redirect: '/login' },
    //  { path: '/login', component: Login },  
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Forgotten',
      name: 'Forgotten',
      component: Forgotten,
    },
    {
      path: '/Enrolled',
      name: 'Enrolled',
      component: Enrolled,
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo,
    },
    {
      path: '/Reset',
      name: 'Reset',
      component: Reset,

    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Loginbackstage',
      name: 'Loginbackstage',
      component: Loginbackstage,
    },
    {
      path: '/Played',
      name: 'Played',
      component: Played,
    },
    {
      path: '/Rolemanagement',
      name: 'Rolemanagement',
      component: Rolemanagement, 
    },
    {
      path: '/',
      name: 'Learning',
      component: Learning,
    },
    {
      path: '/Discipline',
      name: 'Discipline',
      component: Discipline,
    },
    {
      path: '/Organizational',
      name: 'Organizational',
      component: Organizational,
    },

    {
      path: '/Classmanagement',
      name: 'Classmanagement',
      component: Classmanagement,
    },

    {
      path: '/Usermanagement',
      name: 'Usermanagement',
      component: Usermanagement,
    },
    {
      path: '/Rightsmanagement',
      name: 'Rightsmanagement',
      component: Rightsmanagement,
    },
    {
      path: '/Sitemanagement',
      name: 'Sitemanagement',
      component: Sitemanagement,
    },
    {
      path: '/Chapterknowledge',
      name: 'Chapterknowledge',
      component: Chapterknowledge,
    },
    {
      path: '/Auditing',
      name: 'Auditing',
      component: Auditing,
    },
    {
      path: '/Resource',
      name: 'Resource',
      component: Resource,
    },
    {
      path: '/Exampool',
      name: 'Exampool',
      component: Exampool,
    },
    {
      path: '/System',
      name: 'System',
      component: System,
    },
    {
      path: '/Formula',
      name: 'Formula',
      component: Formula,
    },
    {
      path: '/Navigation',
      name: 'Navigation',
      component: Navigation,
    },
    {
      path: '/Information',
      name: 'Information',
      component: Information,
    },
    {
      path: '/addquestion',
      name: '/addquestion',
      component: ()=>import('@/views/submit_question/index'),
      children: [    
      {
        path: 'submitQuestions',
        name: 'submitQuestions',
        component: ()=>import('@/views/submit_question/addquestion'),
      },]
    },
    {
      path: '/questions',
      name: 'questions',
      component: ()=>import('@/views/questions/index'),
      children:[
      {
        path: 'choose_bychapter',
        name: 'choose_bychapter',
        component: ()=>import('@/views/questions/choose_bychapter'),
      },]
    }
  ]
})
