import { createRouter, createWebHistory } from "vue-router";
import App_Nav from '../components/Nav.vue';
import SignIn from '../components/Signin.vue'
import Dashbord from '../components/Dashbord.vue'
import Home from '../components/Home.vue'
import Questionnaire from '../components/Questionnaire.vue'
import How_It_Work from '../components/How_it_work.vue'
import Therapist_List from '../components/therapistList.vue'
import therapistToHire from '../components/therapistToHire.vue'
import Therapist_Lists from '../components/Therapist_Lists.vue'
import CreateAccount from '../components/Create_account.vue'
import Login from '../components/login.vue'
import Schedule from '../components/schedule.vue'
import Therapist from '../components/Therapist.vue'
import PatientList from '../components/PatientList.vue'


const routes = [
 
  {
    path : '/patient_list',
    name : 'PatientList',
    component : PatientList
  },
  {
    path : '/therapist',
    name : 'Therapist',
    component : Therapist
  },
  {
    path : '/schedule',
    name : 'Schedule',
    component : Schedule
  },
   
  {
    path : '/Therapists_Lists',
    name : 'Therapist_Lists',
    component : Therapist_Lists
  },
  {
    path : '/login',
    name : 'Login',
    component : Login
  },
  {
    path : '/create_account',
    name : 'CreateAccount',
    component : CreateAccount
  },
  {
    path : '/',
    name : 'App_Nav',
    component : App_Nav
  },
  {
    path : '/signup',
    name : 'SignIn',
    component : SignIn
  },
  {
    path : '/dashbord',
    name : 'Dashbord',
    component : Dashbord
  },
  {
    path : '/home',
    name : 'Home',
    component : Home
  },
  {
    path : '/questionnaire',
    name : 'Questionnaire',
    component : Questionnaire
  },
  {
    path : '/how_it_work',
    name : 'How_It_Work',
    component : How_It_Work
  },
  {
    path : '/therapist_list',
    name : 'Therapist_list',
    component : Therapist_List
  },
  {
    path : '/therapist_to_hire',
    name : 'therapistToHire',
    component : therapistToHire
  },



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
