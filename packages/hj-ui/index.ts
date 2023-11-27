import { App } from 'vue'
import Foo from '@hj-ui/foo'
import Aa from '@hj-ui/aa'
// import component end
import '../scss/index.scss'

const components = [
  Foo,
  Aa
] // components

// 全局动态添加组件
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}
