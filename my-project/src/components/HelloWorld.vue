<template>

  <div>
        <input type="text" v-model="input.firstname" placeholder="First Name" />
        <input type="text" v-model="input.lastname" placeholder="Last Name" />
        <button v-on:click="sendData()">Send</button>
        <br />
        <br />

        <ul>
          <li v-for="post in posts" :key="post.id">
            <p>{{ post.name }}</p>
            <p>{{ post.body }}</p>
          </li>
        </ul>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      input: {
        firstname: "",
        lastname: ""
      },
      posts: [],
      errors: []
    }
  },

  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(result => {
      this.posts = result.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },

  methods: {
    sendData() {
      axios({ method: "POST", "url": "https://httpbin.org/post", "data": this.input, "headers": { "content-type": "application/json" } }).then(error => { 
        console.error(error);
      });
    }
  }
}
</script>