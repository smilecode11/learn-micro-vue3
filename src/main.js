import { createApp } from 'vue'
import App from './App.vue'

import router from './router'


//#region 微前端子应用改造
let instance = null;
const render = () => {
    instance = createApp(App)
    instance.use(router).mount('#app-vue3')
}

if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

export const bootstrap = async () => {
}

export const mount = async (props) => {
    render()
    console.log(props, '-vue3')
}

export const unmount = async () => {
    console.log('unmount', instance)
}
//#endregion 微前端子应用改造