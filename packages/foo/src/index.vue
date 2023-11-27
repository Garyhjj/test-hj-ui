<script setup lang="ts">
import { fooProps } from './types'
import { testLog } from '@hj-ui/utils'

const NAME = 'hj-foo'

defineOptions({
  name: NAME
})

const props = defineProps(fooProps)

const onBtnClick = () => {
  console.log('点击按钮测试', props.msg)
  testLog(props.msg)
}

</script>

<template>
  <div :class="NAME">
        <h1>yyg-demo-ui Foo</h1>
        <p :class="NAME + '__description'">msg is: {{ msg }}</p>
        <el-button type='primary' @click="onBtnClick">点击我</el-button>
      </div>
</template>
