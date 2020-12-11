<template>
    <div>
        <h1>Admin Login</h1>
        <div v-if="this.$route.query.signupsuccess" class="alert alert-success">Thanks for signing up, please log in now.</div>

        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="exampleEmployeeID">Employee ID</label> 
                <input type="text" id="exampleEmployeeID" required="required" placeholder="Enter id" class="form-control" v-model="EmployeeID">
            </div> 

            <div class="form-group"><label for="exampleEmployeePassword">Password</label> 
                <input type="password" id="exampleEmployeePaddword" placeholder="Password" required="required" class="form-control" v-model="EmployeePassword">
            </div> 
            <button type="submit" class="btn btn-primary">Admin Login</button> 

            <p v-if="credentialsError" class="form-text text-danger">Invalid credentials</p>

              <p v-if="loginError" class="form-text text-danger">Could not log you in, please try again later.</p>

            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return {
            EmployeeID: '',
            EmployeePassword: '',
            loginError: false,
            credentialsError: false
        }
    },
    methods:{
        onSubmit(){
            const myFormData={
                EmployeeID: this.EmployeeID,
                EmployeePassword: this.EmployeePassword
            };
            // console.log("form data:", myFormData)
            axios.post("/admin/login", myFormData)
                .then(myResponse=>{
                    console.log("here is my response", myResponse);
                    this.$store.commit("storeTokenInApp", myResponse.data.token);
                    this.$store.commit("storeAdminTokenInApp", myResponse.data.token);
                    console.log(myResponse.data.token)
                    console.log(myResponse.data.admintoken)
                    this.$store.commit("storeUserInApp", myResponse.data.user);
                    console.log(myResponse.data.user)
                    this.$router.replace("/admin/account")
                })
                .catch((myError)=>{
                    console.log("my error", myError.response.data)
                    if(myError.response.data == 'Invalid user credentials'){
                        this.credentialsError = true
                    }else
                    {this.loginError = true}
                })
        }
    }
    
}
</script>

<style scoped>
</style>