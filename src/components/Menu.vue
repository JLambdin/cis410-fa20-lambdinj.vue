
<template>
    <div>
        <h1>Restaurant Menu</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Item ID:</th>
                    <th>Item Price:</th>
                    <th>Item Description:</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisItem in menu" :key="thisItem.OrderItemID">
                    <th>{{thisItem.OrderItemID}}</th>
                    <td>${{thisItem.ItemPrice}}</td>
                    <td>{{thisItem.ItemDescription}}</td>
                    <!-- <td>
                        <router-link :to="`/menu/${thisItem.OrderItemID}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
                    </td> -->
                </tr>
            </tbody>
        </table>
        <router-link :to="`/menu/search`">
                            <button type="button" class="btn btn-primary">Search for a menu item</button>
                        </router-link>
        <div>
        <img src="src\assets\menu.jpg" alt="">
    </div>
    </div>
    
</template>


<script>
export default {
    computed:{
        menu(){return this.$store.state.menu}
    }
}
</script>

<style scoped>
