<template>
  <div class="home">
    我是home组件
    <!-- <watchDemo/> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import watchDemo from '../components/WatchDemo.vue';

export default defineComponent({
  name: 'HomeView',
  components: { watchDemo }
});
</script>
