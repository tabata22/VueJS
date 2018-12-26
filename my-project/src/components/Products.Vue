<template>
    <div>

        <input type="text" v-model="searchName" >

        <div v-for="product in products" :key="product.id">
            <p>{{ product.title }}</p>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Products',
    data () {
        return {
            searchName: "",
            products: []
        }
    },

    mounted() {
        axios({ method: "GET", "url": "http://jsonplaceholder.typicode.com/posts" }).then(result => {
            this.products = result.data;
        });
    }
}
</script>