<template>
  <div class="about">
    <h1>point: {{point}}</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Point from '../hooks/usePoint.js'

export default defineComponent({
  setup() {
    return {
      point: Point()
    }
  }
})
</script>

