<template>
    <div>
        <div>姓名：{{person.name}}</div>
        <div>数量：{{sum}}</div>
        <div>消息: {{msg}}</div>
        <div>薪资：{{person.job.j1.salary}}</div>
        <div>point: {{point}}</div>
        <button @click="sum++">数量改变</button>
        <button @click="msg+='!'">信息改变</button>
        <button @click="person.job.j1.salary++">涨薪</button>
        <button @click="person.name = '里斯'">姓名改变</button>
    </div>
</template>
<script>
import { defineComponent,ref,reactive,toRef,watch,toRefs } from 'vue'
import Point from '../hooks/usePoint.js'
// import { defineComponent,ref,reactive,watch,watchEffect,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,toRef } from 'vue'
export default defineComponent({
    name: 'WatchDemo',
    setup() {
        console.log('--setup--');
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name: '张三',
            age: 18,
            job: {
                j1: {
                    salary: 20
                }
            }
        })
        
        // let newRef = toRefs(person)
        // let newRef = ref(person,'name')
        // console.log(newRef);

        // 生命周期组合式api
        //#region 
            // onBeforeMount(() => {
            //     console.log('--onBeforeMount');
            // })
            // onMounted(() => {
            //     console.log('--onMounted')
            // })
            // onBeforeUpdate(() => {
            //     console.log('--onBeforeUpdate--');
            // })
            // onUpdated(() => {
            //     console.log('--onUpdated--');
            // })
            // onBeforeUnmount(() => {
            //     console.log('--onBeforeUnmout');
            // })
            // onUnmounted(() => {
            //     console.log('--onUnmouted--');
            // })
        //#endregion

        // watch
        //#region 
            //情况一：监视ref定义的响应式数据：
            watch(sum,(newValue,oldValue) => {
                console.log('监听属性sum：',`新值为${newValue},旧值为${oldValue}`);
            })
            //情况二：监视多个ref定义的响应式数据
            watch([sum,msg],([sumNewValue,msgNewValue],[sumOldValue,msgOldValue]) => {
                console.log(`sum改变：${sumNewValue}-${sumOldValue},,,,,,,,msg改变：${msgNewValue}-${msgOldValue}`);
            })
            //情况三：监视reactive定义的响应式数据
            // 坑：错误的旧值、deep配置项无效
            watch(person,(newValue,oldValue) => {
                console.log(newValue,oldValue);
            },{deep: false})
            //情况四：监视reactive定义的响应式数据中的某个属性
            watch(() => person.name,(newValue,oldValue) => {
                console.log(newValue,oldValue);
            })
            //情况五：监视reactive所定义的一个响应式对象中的某些属性：	
            watch([() => person.name,() => person.job],(newValue,oldValue) => {
                console.log(newValue,oldValue);
            },{deep: true})
            //特殊情况：监视reactive定义的响应式对象中的一个对象属性
            watch(() => person.job,(newValue,oldValue) => {
                console.log(newValue,oldValue);
            },{deep: true})
        //#endregion

        // watchEffect  
        //#region  
            // watchEffect(() => {
            //     const x = sum.value
            //     const y = msg.value
            //     console.log('watchEffect重新执行');
            // })
        //#endregion


        return {
            sum,msg,person,
            point: Point()
        }
    },
    // 配置项生命周期
    //#region 
        // beforeCreate() {
        //     console.log('--beforeCreate--');
        // },
        // created() {
        //     console.log('--created--');
        // },
        // beforeMount() {
        //     console.log('--beforeMount--');
        // },
        // mounted() {
        //     console.log('--mounted--');
        // },
        // beforeUpdate() {
        //     console.log('--beforeUpdate--');
        // },
        // updated() {
        //     console.log('--updated--');
        // },
        // beforeUnmount() {
        //     console.log('--boforeUnmounte--');
        // },
        // unmounted() {
        //     console.log('--unmounted--');
        // }
    //#endregion
})
</script>