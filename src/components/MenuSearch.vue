<template>
    <div>
        <h1>Search Our Menu</h1>

        <form @submit.prevent="onSubmit">
            <div class="form-group"><label for="itemPrice">Item Price</label> 
                <input type="number" id="itemPrice"  placeholder="Enter Item Price" class="form-control" v-model="ItemPrice">
            </div> 

            <div class="form-group"><label for="orderItemID">Item Code</label> 
                <input type="number" id="orderItemID" placeholder="Enter Item ID #"  class="form-control" v-model="OrderItemID">
            </div> 
            <button type="submit" class="btn btn-primary">Search</button>

            </form>
    </div>
</template>


<script>
export default {
    computed:{
        menu(){
            var menu = this.$store.state.menu;
            var thisItem = menu.find((aItem)=> aItem.OrderItemID == this.$route.params.pk)
            //console.log("here is the movie you want", thisMovie);
            return thisItem
        }
    }
} 

</script>

<style scoped>
</style>