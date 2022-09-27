<template>
    <div class="child">
        我是Child组件
        <Son/>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import Son from './Son.vue'
export default defineComponent({
  name: 'Child' ,
  components: { Son } 
})
</script>
<style>
.child {
    background-color: skyblue;
    padding: 10px;
}
</style>
