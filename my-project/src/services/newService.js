import axios from 'axios';

export default {
    mounted() {
        axios({ method: "GET", "url": "http://jsonplaceholder.typicode.com/posts" }).then(result => {
            this.products = result.data;
        });
    }
}