<template>
    <div>
        <h1>Orders</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Order ID Number</th>
                    <th>Customer ID Number</th>
                    <!-- <th>Rewards Points Awarded</th>
                    <th>Order Line ID Number</th> -->
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisOrder in orders" :key="thisOrder.OrderID">
                    <th>{{thisOrder.OrderID}}</th>
                    <td>{{thisOrder.CustomerIDFK}}</td>
                    <!-- <td>{{thisOrder.RewardPointsAwarded}}</td>
                    <td>{{thisOrder.OrderLineIDFK}}</td> -->
                    <td>
                        <router-link :to="`/orders/${thisOrder.OrderID}`">
                            <button type="button" class="btn btn-primary">Order Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    computed:{
        orders(){return this.$store.state.orders}
    }
}
</script>

<style scoped>
</style>