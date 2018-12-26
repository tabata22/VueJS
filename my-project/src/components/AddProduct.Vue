<template>
    <div>
    
        <input type="text" v-model="user.firstName" />
        <button v-on:click="sendData()">შენახვა</button>
        
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'AddProduct',
    data() {
        return {
            user: {
                firstName: ""
            },
            response: ""
        }
    },

    methods: {
        sendData() {
            axios({ method: "POST", "url": "servisis misamarti", "data": this.user, "headers": { "content-type": "application/json" } }).then(result => {
                this.response = result.data;
            });
        }
    }
}
</script>
