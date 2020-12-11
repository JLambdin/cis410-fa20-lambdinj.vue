<template>
     <div>
        <h1>Order Now!</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="customer-input">Customer id</label> <input type="text" id="customer-input" required="required" placeholder="Customer ID" class="form-control" v-model="CustomerIDFK"></div> 
            
            <!-- <div class="form-group"><label for="points-input">Rewards Points</label> <input type="text" id="points-input" required="required" placeholder="Points to be awarded" class="form-control" v-model="RewardPointsAwarded"></div>  -->
            
            <div class="form-group"><label for="order-input">Order Code</label> <input type="text" id="order-input" required="required" placeholder="Order Code" class="form-control" v-model="OrderLineIDFK"> 
           
            </div> 
       <button type="submit" class="btn btn-primary">Complete Order</button> <p id="error-order" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            CustomerIDFK: '',
            RewardPointsAwarded: '',
            OrderLineIDFK:'',
            errorMessage: null,
        }
    },
    methods:{
        onSubmit(){
            const myOrder={
                CustomerIDFK: this.CustomerIDFK,
                RewardPointsAwarded: 500,
                OrderLineIDFK: this.OrderLineIDFK
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.token;
            axios.post("/orders/neworder", myOrder, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/successorder')})
            .catch(()=>{this.errorMessage = "Unable to create an order, please try again later."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
</style>