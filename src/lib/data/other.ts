import type { Fn } from '../fns'

export const others: Fn[] = [
  {
    name: 'by_ref',
    args: {},
    returns: '&#mut #Self',
    category: ['Other'],
    description: 'Creates a “by reference” adapter for this instance of <code>Iterator</code>.',
  },
  {
    name: 'size_hint',
    args: {},
    returns: '($usize, Option<$usize>)',
    category: ['Other'],
    description: 'Returns the bounds on the remaining length of the iterator.',
  },
]
