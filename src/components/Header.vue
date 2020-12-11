<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <img src="src\assets\lambdin.jpg" alt="" width="25%">
  <router-link class="navbar-brand" to='/'>Restaurant Vue/Honors Assignment</router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/menu">Menu</router-link>
      </li>
      
      <li class="nav-item">
        <router-link class="nav-link" to="/account">My Account</router-link>
      </li>

      <li class="nav2-item">
        <router-link class="nav-link" to="/admin/login">Admin Login</router-link>
      </li>
      
      <li class="nav-item">
        <router-link class="nav-link" to="/signin">
          <button class='btn btn-light'>Sign In</button>
        </router-link>
      </li>

      
      
      <li class="nav-item">
        <router-link class="nav-link" to="/signup">
          <button class='btn btn-light'>Sign Up</button>
        </router-link>
      </li>
      
       <li class="nav-item" v-if="auth">
          <button @click="onLogout" class='btn btn-warning'>Log Out</button>
      </li>

      
      
    </ul>
  </div>
</nav>
</template>


<script>
export default {
   computed:{
      auth(){return this.$store.state.token}
    },
    methods:{
      onLogout(){ this.$store.dispatch("logout")}
    } 
}
</script>

<style scoped>
#nav2-item{
  color: white;
}
</style>