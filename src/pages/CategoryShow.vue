<template>
<h1>{{category.name}}</h1>
  <forum-list
  :forums="forumsByCategory (category)"
  :title="category.name"
  />
</template>

<script>
import ForumList from '@/components/ForumList.vue'
import sourceData from '@/data.json'

export default {
  components: { ForumList },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  computed: {
    category () {
      return sourceData.categories.find(category => category.id === this.id)
    }
  },
  methods: {
    forumsByCategory (category) {
      return sourceData.forums.filter(forum => forum.categoryId === category.id)
    }
  }

}
</script>

<style>

</style>
