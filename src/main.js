import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import { setMain } from './utils/main'

//#region 微前端子应用改造
let instance = null;
const render = () => {
    instance = createApp(App)
    instance.use(router).mount('#app-vue3')
}

if (!window.__MICRO_WEB__) {
    render()
}

export const bootstrap = () => {
}

export const mount = (app) => {
    render()
    // app.appInfo.header.changeHeader(false)
    setMain(app)    //  通过 setMain 进行本地 mian 存储

    // 执行挂载到 window 上的 testevnet 事件
    window.custom.emit('testevent', {
        test: '123'
    })
    window.custom.on('test1', (data) => {
        console.log('test1 on - ', data)

        window.custom.emit('test2', {
            test2: '123'
        })
    })
}

export const unmount = () => {
    console.log('unmount', instance)
}
//#endregion 微前端子应用改造