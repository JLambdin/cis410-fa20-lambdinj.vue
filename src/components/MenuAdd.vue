<template>
    <div>
        <h1>Create a New Menu Item</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="price-input">New Item Price</label> <input type="number" id="price-input" required="required" placeholder="0" class="form-control" v-model="ItemPrice"></div> 
            
            <div class="form-group"><label for="desc-input">New Item Description</label> <input type="text" id="desc-input" required="required" placeholder="Item Description" class="form-control" v-model="ItemDescription"></div> 
            
             <button type="submit" class="btn btn-primary">Submit New Item to Menu</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            ItemPrice: '',
            ItemDescription: '',
            errorMessage: null,
        }
    },
    methods:{
        onSubmit(){
            const myOrder={
                ItemPrice: this.ItemPrice,
                //RewardPointsAwarded: 500,
                ItemDescription: this.ItemDescription
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.admintoken;
            axios.post("/menu/add", myOrder, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/menu')})
            .catch(()=>{this.errorMessage = "Unable to create new item, please try again later."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
</style>