<template>

  <ul>
    <li v-for="post in posts" :key="post.id">
      <p>{{ post.name }}</p>
      <p>{{ post.body }}</p>
    </li>
  </ul>

</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>