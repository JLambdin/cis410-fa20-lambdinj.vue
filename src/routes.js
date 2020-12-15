import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import ALogin from './components/ALogin.vue'
import MovieDetail from './components/MovieDetail.vue';
import Menu from './components/Menu.vue';
import MenuAdd from './components/MenuAdd.vue';
import MenuDelete from './components/MenuDelete.vue';
import Orders from './components/Orders.vue';
import NotFound from './components/NotFound.vue';
import NewOrder from './components/NewOrder.vue';
import SignUp from './components/SignUp.vue';
import AdminSignUp from './components/AdminSignUp.vue';
import store from './store.js';
import Director from './components/DirectorAc.vue';
import CustomerUpdate from './components/CustomerUpdate.vue';
import SuccessOrder from './components/SuccessOrder.vue';
import MenuSearch from './components/MenuSearch.vue';




Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token)
            {next()}
            else{next('/signin')}
    }},

    {path: '/admin/account', component: Director, beforeEnter(to, from, next){
        if(store.state.token)
            {next()}
            else{next('/admin/login')}
    }},
    
    {path: '/signin', component: Login},
    {path: '/admin/login', component: ALogin},
    {path: '/account/update', component: CustomerUpdate},
    {path: '/menu', component: Menu},
    {path: '/menu/add', component: MenuAdd},
    {path: '/menu/search', component: MenuSearch},
    {path: '/menu/delete', component: MenuDelete},
    {path: '/orders', component: Orders},
    {path: '/orders/:pk', component: MovieDetail,
    
},
    {path: '/neworder', component: NewOrder},
    {path: '/successorder', component: SuccessOrder},
    {path: '/signup', component: SignUp},
    {path: '/admin/signup', component: AdminSignUp},
   
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})