<template>
    <div>
        <h1>Your Account Page!</h1>
        <hr/>
        <h3> {{firstName}}'s Details </h3>
        <router-link :to="`/neworder`">
                            <button type="button" class="btn btn-primary">Order Now!</button>
                        </router-link>

        <p v-if="accountError" class="form-text text-danger">Can not get your orders, please try again later</p>
        
        <table  class="table">
            <thead>
                <th>Customer ID</th>
                <th>Email</th>
                <th>Name First</th>
                <th>Name Last</th>
            </thead>
            <tbody>

                <tr v-for="thisOrder in myDetails" :key="thisOrder.CustomerID">
                    <th>{{myDetails.CustomerID}}</th>
                    <th>{{myDetails.Email}}</th>
                    <th>{{myDetails.NameLast}}</th>
                    <th>{{myDetails.NameFirst}}</th>
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
        axios.get(`/customers/me`, {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the customers/orders response:", response)
            this.myDetails = response.data})
            
        .catch(()=>{
            this.accountError = true
        })
    },
    //console.log("What");
    user(){return this.$store.state.myDetails}
    
}

// axios.get(`/customers/${this.$store.state.user.CustomerID}/orders`, {
//             headers: {
//                 Authorization: `Bearer ${this.$store.state.token}`
//             }
//         })
//         .then((response)=>{ 
//             console.log("here is the customers/orders response:", response)
//             this.myOrders = response.data})
//         .catch(()=>{
//             this.accountError = true
//         })
//     },
//     orders(){return this.$store.state.myOrders}
    
</script>

<style scoped>
</style>