import { defineComponent } from 'vue'
import { aaProps } from './types'

const NAME = 'hj-aa'

export default defineComponent({
  name: NAME,
  props: aaProps,
  setup (props, context) {
    console.log(props, context)
    return () => (
      <div class={NAME}>
        <div>
          hj-aa
        </div>
      </div>
    )
  }
})
