import type { Fn } from '../fns'

export const others: Fn[] = [
  {
    name: 'by_ref',
    args: [],
    category: ['Other'],
    description: 'Creates a “by reference” adapter for this instance of <code>Iterator</code>.',
  },
  {
    name: 'size_hint',
    args: [],
    category: ['Other'],
    description: 'Returns the bounds on the remaining length of the iterator.',
  },
]
