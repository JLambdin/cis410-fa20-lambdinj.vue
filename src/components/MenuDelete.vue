<template>
    <div>
        <h1>Delete a Menu Item</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="id-input">Item ID</label> <input type="number" id="id-input" required="required" placeholder="0" class="form-control" v-model="OrderItemID"></div> 
                        
             <button type="submit" class="btn btn-primary">Delete Menu Item</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            OrderItemID: '',
            errorMessage: null,
        }
    },
    methods:{
        onSubmit(){
            const myOrder={
                OrderItemID: this.OrderItemID
                //RewardPointsAwarded: 500,
                
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.admintoken;
            axios.post("/menu/delete", myOrder, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/menu')})
            .catch(()=>{this.errorMessage = "Unable to delete the item, please try again later."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
</style>