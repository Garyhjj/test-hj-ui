import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import HjUi from '@hj-ui/hj-ui'

const app = createApp(App)

app.use(ElementPlus)
app.use(HjUi)

app.mount('#app')
