<template>
    <div>
        <h1>Your Account Page!</h1>
        <hr/>
        <h3> {{firstName}}'s Orders </h3>
        <router-link :to="`/neworder`">
                            <button type="button" class="btn btn-primary">Order Now!</button>
                        </router-link>

        <p v-if="accountError" class="form-text text-danger">Can not get your orders, please try again later</p>
        
        <table v-if="reviewsByUser" class="table">
            <thead>
                <th>Order ID</th>
                <th>Order Line ID</th>
                <th>Reward Points Awarded</th>
            </thead>
            <tbody>
                <tr v-for="thisOrder in myOrders" :key="thisOrder.OrderID">
                    <th>{{thisOrder.OrderID}}</th>
                    <th>{{thisOrder.OrderLineIDFK}}</th>
                    <th>{{thisOrder.RewardPointsAawarded}}</th>
                </tr>
            </tbody>   
        </table>
       
    </div>
    
        
    
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            Order
        }
    },
    computed:{
    firstName(){
        console.log(this.$store.state)
       //console.log(this.$store.state.user.CustomerID)
        return this.$store.state.user.NameFirst}
    },
    created(){
        axios.get(`/customers/${this.$store.state.user.CustomerID}/orders`, {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the customers/orders response:", response)
            this.myOrders = response.data})
        .catch(()=>{
            this.accountError = true
        })
    },
    orders(){return this.$store.state.myOrders}
    
}
</script>

<style scoped>
</style>