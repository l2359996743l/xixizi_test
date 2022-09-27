import { reactive,onMounted,onBeforeUnmount } from 'vue'
export default () => {
    let point = reactive({
        x: 0,
        y:0
    })
    let savePoint = e => {
        point.x = e.pageX
        point.y = e.pageY
        console.log(point.x,point.y);
    }
    //绑定鼠标事件
    onMounted(() => {
        window.addEventListener('click',savePoint)
    })
    // 解除鼠标事件
    onBeforeUnmount(() => {
        window.removeEventListener('click',savePoint)
    })
    return point
}