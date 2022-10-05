<template>
  <span :title="humanFriendly">
        {{diffForHumans}}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedDate from 'dayjs/plugin/localizedFormat'

dayjs.extend(relativeTime)
dayjs.extend(localizedDate)

export default {
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  computed: {
    humanFriendly () {
      return dayjs.unix(this.timestamp).format('llll')
    },
    diffForHumans () {
      return dayjs.unix(this.timestamp).fromNow()
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
