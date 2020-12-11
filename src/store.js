import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        admintoken: null,
        user: null,
        menu: [],
        orders: [],
        ordersSpec: [],
        myOrders: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeAdminTokenInApp(state, myToken){
            state.admintoken = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser 
        },
        storeMenu(state, menu){
            state.menu = menu
        },
        storeOrders(state, orders){
            state.orders = orders
        },
        storeOrdersSpec(state, ordersSpec){
            state.ordersSpec = ordersSpec
        },
        storeMyOrders(state, myOrders){
            state.myOrders = myOrders
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getOrders({commit}){
            axios.get('/orders')
            .then((myResponse)=>{
                console.log("response from getOrders action", myResponse);
                commit('storeOrders', myResponse.data)
            })
            .catch(()=>{console.log("error in getOrders action")})
        },
        getOrdersSpec({commit}){
            axios.get('/ordersspec')
            .then((myResponse)=>{
                console.log("response from getOrdersSpec action", myResponse);
                commit('storeOrdersSpec', myResponse.data)
            })
            .catch(()=>{console.log("error in getOrdersSpec action")})
        },
        getOrdersUser({commit}){
            axios.get(`/customers/${user.UserID}/orders`)
            .then((myResponse)=>{
                console.log("response from getOrdersUser action", myResponse);
                commit('storeMyOrders', myResponse.data)
            })
            .catch(()=>{console.log("error in getOrdersSpec action")})
        },
        getMenu({commit}){
            axios.get('/menu')
            .then((myResponse)=>{
                console.log("response from getMenu action", myResponse);
                commit('storeMenu', myResponse.data)
            })
            .catch(()=>{console.log("error in getMovies action")})
        },
        
        logout({commit, state}){
            axios.post('/customers/logout', null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }
    }
})