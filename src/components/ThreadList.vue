<template>
<div class="col-full">

<div class="thread-list">

    <h2 class="list-title">Threads</h2>

    <div v-for="thread in threads" :key='thread.id' class="thread">
        <div>
            <p>
                <!-- <a href="#">{{thread.title}}</a> -->
                <!-- <router-link :to="`/thread/${thread.id}`">{{thread.title}}</router-link> -->
                <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}" >{{thread.title}}</router-link>
            </p>
            <p class="text-faded text-xsmall">
                By <a href="#">{{userById(thread.userId).name}}</a>, <AppDate :timestamp="thread.publishedAt"/>
            </p>
        </div>

        <div class="activity">
            <p class="replies-count">
               {{thread.posts.length}} {{ (thread.posts.length > 1 || thread.posts.length === 0) ? "replies" : "reply" }}
            </p>

            <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

            <div>
                <p class="text-xsmall">
                    <a href="profile.html">{{userById(thread.userId).name}}</a>
                </p>
                <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt"/></p>
            </div>
        </div>
    </div>

</div>

</div>
</template>

<script>
import dataSource from '@/data.json'
export default {
  props: {
    threads: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      posts: dataSource.posts,
      users: dataSource.users
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id)//  this.$route.params.id
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  }
}
</script>

<style scoped>

</style>
