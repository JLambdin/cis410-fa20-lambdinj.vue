<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">Order Description:</h2>
                <br/>
                <p>Order ID: <br/> <strong>{{orders.OrderID}}</strong></p>
                <p>Customer ID: <br/> <strong>{{orders.CustomerIDFK}}</strong></p>
                <!-- <p>First Name: <br/> <strong>{{orders.NameFirst}}</strong></p>
                <p>Last Name: <br/> <strong>{{orders.NameLast}}</strong></p>
                <p>Email: <br/> <strong>{{orders.Email}}</strong></p>
                <p>Phone Number: <br/> <strong>{{orders.PhoneNumber}}</strong></p> -->
                <p>Reward Points Awarded: <br/> <strong>{{orders.RewardPointsAwarded}}</strong></p>
                <p>Order Line ID: <br/> <strong>{{orders.OrderLineIDFK}}</strong></p>
            </div>
        </div>
        <br/>
        <router-link v-if="auth" :to="`/orders/neworder`">
            <button type="button" class="btn btn-success">Create a New Order</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-primary">Sign In to Make an order</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>


<script>
export default {
    computed:{
        orders(){
            var orders = this.$store.state.orders;
            var thisOrder = orders.find((aOrder)=> aOrder.OrderID == this.$route.params.pk)
            //console.log("here is the movie you want", thisMovie);
            return thisOrder
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>
</style>