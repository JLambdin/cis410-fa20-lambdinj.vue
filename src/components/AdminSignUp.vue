<template>
    <div>
        <h1>Sign Up A New admin</h1>
        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="fname-input">First name</label> <input type="text" id="fname-input" required="required" placeholder="First name" class="form-control" v-model="NameFirst"></div> 
            
            <div class="form-group"><label for="lname-input">Last name</label> <input type="text" id="lname-input" required="required" placeholder="Last name" class="form-control" v-model="NameLast"></div> 
       
            <div class="form-group"><label for="password-input">EmployeePassword</label> <input type="text" id="password-input" required="required" placeholder="Employee Password" class="form-control" v-model="EmployeePassword"></div>
            
             <button type="submit" class="btn btn-primary">Submit</button> <p id="error-signup" class="text-danger">{{errorMessage}}</p>
            
            </form>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return {
            NameFirst:'',
            NameLast: '',
            EmployeePassword:'',
            errorMessage:'',
            dupEmail: false
        }
    },
    methods:{
        onSubmit(){
            const myFormData = {
                NameFirst: this.NameFirst,
                NameLast: this.NameLast,
                EmployeePassword: this.EmployeePassword
            }
             console.log(myFormData)
            axios.post("/admin/new", myFormData)
                .then((myResponse)=>{
                    // console.log(myResponse)
                    this.$router.replace("/signin?signupsuccess=true")
                    })
                .catch((myError)=>{
                    if(myError.response.status === 409){
                        this.dupEmail = true
                    }else{
                        this.errorMessage = "Cannot sign you up, please try again later."
                    }
                })
        }
    }
}
</script>

<style scoped>
</style>