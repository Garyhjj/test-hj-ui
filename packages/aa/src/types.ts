import { ExtractPropTypes } from 'vue'

export const aaProps = {
} as const

export type AaProps = ExtractPropTypes<typeof aaProps>
