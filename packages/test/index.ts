import Test from './src/test.vue'
import { App } from 'vue'

Test.name = 'hj-test'

Test.install = (app: App): void => {
  // 注册组件
  app.component(Test.name, Test)
}

export default Test
