import PageHome from '@/pages/PageHome.vue'
import PageThreadShow from '@/pages/ThreadShow.vue'
import PageNotFound from '@/pages/NotFound.vue'
import CategoryShow from '@/pages/CategoryShow.vue'
import ForumShow from '@/pages/ForumShow.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'PageHome',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: PageThreadShow,
    props: true,
    beforeEnter (to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(thread => thread.id === to.params.id)
      // if exists continue
      if (threadExists) {
        return next()
      } else {
        next({
          name: 'NotFound',
          params: { pathMatch: to.path.substring(1).split('/') },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash
        })
      }
      // if doesnt exist redirect to not found
    }
  },
  {
    path: '/category/:id',
    name: 'CategoryShow',
    component: CategoryShow,
    props: true
  },
  {
    path: '/forum/:id',
    name: 'ForumShow',
    component: ForumShow,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
