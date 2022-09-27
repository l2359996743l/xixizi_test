<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div class="app" id="app">
      我是App组件
      <Child/>
    </div>
  </nav>
  <!-- <router-view /> -->
</template>
<script>
import { defineComponent } from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
  name: 'App',
  components: { Child },
  // emits: ['myfoucus'],
  setup(props,{attrs,solts,emit}) {
    console.log(props,attrs,solts,emit);
  }
})
</script>
<style>
.app {
  background-color: #999;
  padding: 10px;
}
</style>

