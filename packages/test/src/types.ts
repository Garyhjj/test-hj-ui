import { ExtractPropTypes } from 'vue'

export const testProps = {
} as const

export type TestProps = ExtractPropTypes<typeof testProps>
