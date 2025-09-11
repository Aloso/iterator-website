import type { Fn } from '../fns'

export const consumers: Fn[] = [
  // Select
  {
    name: 'next',
    args: [],
    category: ['Consumers', 'Select'],
    description: 'Advances the iterator and returns the next value.',
  },
  {
    name: 'last',
    args: [],
    category: ['Consumers', 'Select'],
    description: 'Consumes the iterator, returning the last element.',
  },
  {
    name: 'nth',
    args: ['n'],
    category: ['Consumers', 'Select'],
    description: 'Returns the nth element of the iterator.',
  },
  {
    name: 'next_chunk',
    args: [],
    generic_args: ['const N'],
    category: ['Consumers', 'Select'],
    description: 'Advances the iterator and returns an array containing the next <code>N</code> values.',
    nightly: true,
  },
  // Search
  {
    name: 'find',
    args: ['predicate'],
    category: ['Consumers', 'Search'],
    description: 'Searches for an element of an iterator that satisfies a predicate.',
  },
  {
    name: 'find_map',
    args: ['transform'],
    category: ['Consumers', 'Search'],
    description: 'Applies a function to the elements of the iterator and returns the first non-none result.',
    related: ['map'],
  },
  {
    name: 'position',
    args: ['predicate'],
    category: ['Consumers', 'Search'],
    description: 'Searches for an element in an iterator, returning its index.',
  },
  {
    name: 'rposition',
    args: ['predicate'],
    category: ['Consumers', 'Search'],
    description: 'Searches for an element in an iterator from the right, returning its index.',
    related: ['rev'],
  },
  {
    name: 'try_find',
    args: ['predicate'],
    category: ['Consumers', 'Search'],
    description: 'Applies function to the elements of iterator and returns the first true result or the first error.',
    related: ['find'],
    nightly: true,
  },
  // Validate
  {
    name: 'all',
    args: ['predicate'],
    category: ['Consumers', 'Validate'],
    description: 'Tests if every element of the iterator matches a predicate.',
  },
  {
    name: 'any',
    args: ['predicate'],
    category: ['Consumers', 'Validate'],
    description: 'Tests if any element of the iterator matches a predicate.',
  },
  {
    name: 'is_sorted',
    args: [],
    category: ['Consumers', 'Validate'],
    description: 'Checks if the elements of this iterator are sorted.',
  },
  {
    name: 'is_sorted_by',
    args: ['compare'],
    category: ['Consumers', 'Validate'],
    description: 'Checks if the elements of this iterator are sorted using the given comparator function.',
  },
  {
    name: 'is_sorted_by_key',
    args: ['extract_key'],
    category: ['Consumers', 'Validate'],
    description: 'Checks if the elements of this iterator are sorted using the given key extraction function.',
  },
  {
    name: 'is_partitioned',
    args: ['predicate'],
    category: ['Consumers', 'Validate'],
    description:
      'Checks if the elements of this iterator are partitioned according to the given predicate, such that all those that return <code>true</code> precede all those that return <code>false</code>.',
    related: ['partition'],
    nightly: true,
  },
  // Accumulate
  {
    name: 'fold',
    args: ['init', 'accumulate'],
    category: ['Consumers', 'Accumulate'],
    description: 'Folds every element into an accumulator by applying an operation, returning the final result.',
    related: ['try_fold', 'scan'],
  },
  {
    name: 'reduce',
    args: ['reducer'],
    category: ['Consumers', 'Accumulate'],
    description: 'Reduces the elements to a single one, by repeatedly applying a reducing operation.',
    related: ['try_reduce'],
  },
  {
    name: 'collect',
    args: [],
    generic_args: ['Collection'],
    category: ['Consumers', 'Accumulate'],
    description: 'Transforms an iterator into a collection.',
  },
  {
    name: 'count',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Consumes the iterator, counting the number of iterations and returning it.',
    related: ['sum'],
  },
  {
    name: 'max',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the maximum element of an iterator.',
  },
  {
    name: 'max_by',
    args: ['compare'],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the element that gives the maximum value with respect to the specified comparison function.',
  },
  {
    name: 'max_by_key',
    args: ['extract_key'],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the element that gives the maximum value from the specified key extraction function.',
  },
  {
    name: 'min',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the minimum element of an iterator.',
  },
  {
    name: 'min_by',
    args: ['compare'],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the element that gives the minimum value with respect to the specified comparison function.',
  },
  {
    name: 'min_by_key',
    args: ['extract_key'],
    category: ['Consumers', 'Accumulate'],
    description: 'Returns the element that gives the minimum value from the specified key extraction function.',
  },
  {
    name: 'sum',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Sums the elements of an iterator.',
  },
  {
    name: 'product',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Iterates over the entire iterator, multiplying all the elements',
  },
  {
    name: 'try_fold',
    args: ['predicate'],
    category: ['Consumers', 'Accumulate'],
    description:
      'An iterator method that applies a function as long as it returns successfully, producing a single, final value.',
    related: ['fold'],
  },
  {
    name: 'try_reduce',
    args: ['reducer'],
    category: ['Consumers', 'Accumulate'],
    description:
      'Reduces the elements to a single one by repeatedly applying a reducing operation. If the closure returns a failure, the failure is propagated back to the caller immediately.',
    related: ['reduce'],
  },
  {
    name: 'unzip',
    args: [],
    category: ['Consumers', 'Accumulate'],
    description: 'Converts an iterator of pairs into a pair of containers.',
    related: ['zip'],
  },
  {
    name: 'partition',
    args: ['predicate'],
    category: ['Consumers', 'Accumulate'],
    description: 'Consumes an iterator, creating two collections from it.',
  },
  {
    name: 'try_collect',
    args: [],
    generic_args: ['Collection'],
    category: ['Consumers', 'Accumulate'],
    description: 'Fallibly transforms an iterator into a collection, short circuiting if a failure is encountered.',
    related: ['collect'],
    nightly: true,
  },
  {
    name: 'collect_into',
    args: ['collection'],
    category: ['Consumers', 'Accumulate'],
    description: 'Collects all the items from an iterator into a collection.',
    related: ['collect'],
    nightly: true,
  },
  // Compare
  {
    name: 'cmp',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description: 'Lexicographically compares the elements of this <code>Iterator</code> with those of another.',
  },
  {
    name: 'partial_cmp',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description:
      'Lexicographically compares the <code>PartialOrd</code> elements of this <code>Iterator</code> with those of another. The comparison works like short-circuit evaluation.',
  },
  {
    name: 'eq',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description: 'Determines if the elements of this <code>Iterator</code> are equal to those of another.',
  },
  {
    name: 'ne',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description: 'Determines if the elements of this <code>Iterator</code> are not equal to those of another.',
  },
  {
    name: 'ge',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description:
      'Determines if the elements of this <code>Iterator</code> are lexicographically greater than or equal to those of another.',
  },
  {
    name: 'gt',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description:
      'Determines if the elements of this <code>Iterator</code> are lexicographically greater than those of another.',
  },
  {
    name: 'le',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description:
      'Determines if the elements of this <code>Iterator</code> are lexicographically less or equal to those of another.',
  },
  {
    name: 'lt',
    args: ['iterable'],
    category: ['Consumers', 'Compare'],
    description:
      'Determines if the elements of this <code>Iterator</code> are lexicographically less than those of another.',
  },
  {
    name: 'cmp_by',
    args: ['iterable', 'compare'],
    category: ['Consumers', 'Compare'],
    description:
      'Lexicographically compares the elements of this <code>Iterator</code> with those of another with respect to the specified comparison function.',
    nightly: true,
  },
  {
    name: 'partial_cmp_by',
    args: ['iterable', 'compare'],
    category: ['Consumers', 'Compare'],
    description:
      'Lexicographically compares the elements of this <code>Iterator</code> with those of another with respect to the specified comparison function.',
    nightly: true,
  },
  {
    name: 'eq_by',
    args: ['iterable', 'compare'],
    category: ['Consumers', 'Compare'],
    description:
      'Determines if the elements of this <code>Iterator</code> are equal to those of another with respect to the specified equality function.',
    nightly: true,
  },
  // Misc.
  {
    name: 'for_each',
    args: ['function'],
    category: ['Consumers', 'Misc.'],
    description: 'Calls a closure on each element of an iterator.',
  },
  {
    name: 'try_for_each',
    args: ['function'],
    category: ['Consumers', 'Misc.'],
    description:
      'An iterator method that applies a fallible function to each item in the iterator, stopping at the first error and returning that error.',
    related: ['for_each'],
  },
  {
    name: 'advance_by',
    args: ['n'],
    category: ['Consumers', 'Misc.'],
    description: 'Advances the iterator by <code>n</code> elements.',
    nightly: true,
  },
  {
    name: 'partition_in_place',
    args: ['predicate'],
    category: ['Consumers', 'Misc.'],
    description:
      'Reorders the elements of this iterator in-place according to the given predicate, such that all those that return true precede all those that return false. Returns the number of true elements found.',
    nightly: true,
  },
]
