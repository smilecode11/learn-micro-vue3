import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

//#region 微前端子应用改造
let instance = null;
const render = () => {
    instance = createApp(App)
    instance.use(router).mount('#app')
}

if (!window.__MICRO_WEB__) {
    render()
}

export const bootstrap = () => {
    console.log('bootstrap')
}

export const mount = () => {
    console.log('mount')
    render()
}

export const unmount = () => {
    console.log('unmount', instance)
}
//#endregion 微前端子应用改造