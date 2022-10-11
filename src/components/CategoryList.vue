<template>
  <forum-list v-for="category in categories"
  :key="category.id"
  :forums="forumsByCategory(category)"
  :title="category.name"
  :categoryId="category.id"/>
</template>

<script>
import dataSource from '@/data.json'
import ForumList from './ForumList.vue'
export default {
  components: { ForumList },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  methods: {
    forumsByCategory (category) {
      return dataSource.forums.filter(forum => forum.categoryId === category.id)
    }
  }
}

</script>

<style>

</style>
