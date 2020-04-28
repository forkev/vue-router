import Vue from 'vue'
import VueRouter from '../../dist/vue-router'

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter)

// 2. Define route components

const Foo = {
  template: `<p>Foo</p>`
}
const Boo = {
  template: `<p>Boo</p>`
}

// 3. Create the router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: Foo
    },
    {
      path: '/b',
      component: Boo
    }
  ]
})

// 4. Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.
new Vue({
  el: '#app',
  router,
  data: () => ({ n: 0 }),
  template: `
    <div id="app">
      <router-link to='/'>to a</router-link>
      <router-link to='/b'>to b</router-link>
      <router-view class="view one"></router-view>
    </div>
  `
})
