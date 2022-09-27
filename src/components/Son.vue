<template>
    <div class="son">
        <div>我是son组件</div>
        <button @click="isShow = true">点我弹个窗</button>
        <teleport to="body">
            <div v-if="isShow" class="mark">
                <div class="dialog">
                    <div>我是一个弹窗！</div> 
                    <div>一些内容</div>
                    <div>一些内容</div>
                    <div>一些内容</div>
                    <button @click="isShow = false">关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>
<script>
import { defineComponent, reactive, toRefs} from 'vue'
export default defineComponent({
    name: 'Son',
    setup() {
        let data = reactive({
            isShow: false
        })
        let methods = {
            showDialog() {
                alert('我是一个弹窗！')
            }
        }
        return {
            ...toRefs(data),
            ...methods
        }
    }
})
</script>
<style>
.mark {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
}
.dialog {
    width: 200px;
    height: 200px;
    position: absolute;
    background-color: pink;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%)
}
.son{
    background-color: #eeb24c;
    padding: 10px;
}
</style>

