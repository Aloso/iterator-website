export type TabCategory = 'Constructors' | 'Adapters' | 'Consumers' | 'Other'

export interface Fn {
  name: string
  args: string[]
  generic_args?: string[]
  category: [TabCategory, string] | [TabCategory]
  tags?: string[]
  receiver?: string
  description: string
  related?: string[]
  url?: string | false
  nightly?: boolean
  itertools?: boolean
}
