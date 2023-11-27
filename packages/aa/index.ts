import Aa from './src/aa'
import { App } from 'vue'

Aa.install = (app: App): void => {
  // 注册组件
  app.component(Aa.name, Aa)
}

export default Aa
