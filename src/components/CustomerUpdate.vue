<template>
     <div>
        <h1>Update Your Password!</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="id-input">Your ID # Confirmation</label> <input type="text" id="id-input" required="required" placeholder="Confirm Your ID" class="form-control" v-model="id"></div> 
            <div class="form-group"><label for="password-input">New Password</label> <input type="text" id="password-input" required="required" placeholder="New Password" class="form-control" v-model="NewPassword"></div> 
        
            
       <button type="submit" class="btn btn-primary">Set New Password</button> <p id="error-order" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            id: '',
            NewPassword: '',
            errorMessage: null,
        }
    },
    methods:{
        onSubmit(){
            const myOrder={
                id: this.id,
                NewPassword: this.NewPassword
                
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.token;
            axios.post("/customers/update", myOrder, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/')})
            .catch(()=>{this.errorMessage = "Unable to reset password."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
</style>