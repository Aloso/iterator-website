export type TabCategory = 'Constructors' | 'Adapters' | 'Consumers' | 'Other'

export interface Fn {
  name: string
  generic_args?: Record<string, string[]>
  const_generic_args?: Record<string, string>
  args: string[] | Record<string, string>
  returns?: string
  where?: string[]

  category: [TabCategory, string] | [TabCategory]
  description: string
  related?: string[]
  url?: string | false
  nightly?: boolean
  itertools?: boolean
}
