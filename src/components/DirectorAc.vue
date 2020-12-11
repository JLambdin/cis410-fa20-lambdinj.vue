<template>
    <div>
        <h1>Admin Hub</h1>
        <hr/>
        <h3> {{firstName}}'s Admin Account </h3>
    <div>
         <router-link :to="`/admin/signup`">
                            <button type="button" class="btn btn-primary">New Admin</button>
                        </router-link>

         <router-link :to="`/menu/add`">
                            <button type="button" class="btn btn-primary">New Menu Item</button>
                        </router-link>
         <router-link :to="`/menu/delete`">
                            <button type="button" class="btn btn-primary">Delete a Menu Item</button>
                        </router-link>
    </div>

    </div>
</template>


<script>
import axios from 'axios';
export default {
    data(){
        return{
            reviewsByUser: null,
            accountError: false
        }
    },
    computed:{
    firstName(){
        console.log(this.$store.state)
        return this.$store.state.user.NameFirst}
    },
   
}
</script>

<style scoped>
</style>