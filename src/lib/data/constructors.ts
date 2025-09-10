import type { Fn } from '../fns'

export const constructors: Fn[] = [
  // From function
  {
    name: 'from_fn',
    args: ['next'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.from_fn.html',
    description: 'Creates an iterator with the provided closure as its <code>next</code> method.',
  },
  {
    name: 'empty',
    args: [],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.empty.html',
    description: 'Creates an iterator that yields nothing.',
  },
  {
    name: 'once',
    args: ['element'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.once.html',
    description: 'Creates an iterator that yields an element exactly once.',
  },
  {
    name: 'once_with',
    args: ['make'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.once_with.html',
    description: 'Creates an iterator that lazily generates a value exactly once by invoking the provided closure.',
  },
  {
    name: 'repeat',
    args: ['element'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.repeat.html',
    description: 'Creates a new iterator that endlessly repeats a single element.',
  },
  {
    name: 'repeat_n',
    args: ['element'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.repeat_n.html',
    description: 'Creates a new iterator that repeats a single element a given number of times.',
  },
  {
    name: 'repeat_with',
    args: ['repeater'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.repeat_with.html',
    description: 'Creates a new iterator that repeats elements endlessly by applying the provided closure.',
  },
  {
    name: 'successors',
    args: ['first', 'next'],
    category: ['Constructors', 'a function'],
    url: 'https://doc.rust-lang.org/std/iter/fn.successors.html',
    description:
      'Creates an iterator which, starting from an initial item, computes each successive item from the preceding one.',
  },
  // From array/slice/collection
  {
    name: 'iter',
    args: [],
    category: ['Constructors', 'an array/slice/collection'],
    url: false,
    description: 'An iterator that borrows the elements',
  },
  {
    name: 'iter_mut',
    args: [],
    category: ['Constructors', 'an array/slice/collection'],
    url: false,
    description: 'An iterator that <em>mutably</em> borrows the elements',
  },
  {
    name: 'into_iter',
    args: [],
    category: ['Constructors', 'an array/slice/collection'],
    url: false,
    description: 'Moves the array/slice/collection, returning an owned iterator over its elements.',
  },
  // From string
  {
    name: 'chars',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.chars',
    description: 'Returns an iterator over the <code>char</code>s of a string slice.',
  },
  {
    name: 'char_indices',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.char_indices',
    description: 'Returns an iterator over the <code>char</code>s of a string slice, and their positions.',
  },
  {
    name: 'bytes',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.bytes',
    description: 'Returns an iterator over the bytes of a string slice.',
  },
  {
    name: 'lines',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.lines',
    description: 'Returns an iterator over the lines of a string, as string slices.',
  },
  {
    name: 'split',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.split',
    description: `Returns an iterator over substrings of this string slice, separated by characters matched by a pattern.<br /><br />
      Also see <a href="https://doc.rust-lang.org/std/primitive.str.html#method.split_whitespace">split_whitespace</a>,
      <a href="https://doc.rust-lang.org/std/primitive.str.html#method.split_ascii_whitespace">split_ascii_whitespace</a>,
      <a href="https://doc.rust-lang.org/std/primitive.str.html#method.split_inclusive">split_inclusive</a>,
      <a href="https://doc.rust-lang.org/std/primitive.str.html#method.rsplit">rsplit</a>, etc.`,
  },
  {
    name: 'matches',
    args: [],
    category: ['Constructors', 'a string'],
    url: 'https://doc.rust-lang.org/std/primitive.str.html#method.matches',
    description: `Returns an iterator over the disjoint matches of a pattern within the given string slice.<br /><br />
      Also see <a href="https://doc.rust-lang.org/std/primitive.str.html#method.rmatches">rmatches</a>,
      <a href="https://doc.rust-lang.org/std/primitive.str.html#method.match_indices">match_indices</a>,
      <a href="https://doc.rust-lang.org/std/primitive.str.html#method.rmatch_indices">rmatch_indices</a>`,
  },
  // From HashMap
  {
    name: 'keys',
    args: [],
    category: ['Constructors', 'a HashMap/BTreeMap'],
    url: 'https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.keys',
    description: 'An iterator visiting all keys in arbitrary order.',
  },
  {
    name: 'values',
    args: [],
    category: ['Constructors', 'a HashMap/BTreeMap'],
    url: 'https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.values',
    description: 'An iterator visiting all values in arbitrary order.',
  },
  {
    name: 'into_keys',
    args: [],
    category: ['Constructors', 'a HashMap/BTreeMap'],
    url: 'https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.into_keys',
    description: 'Moves the HashMap, returning an iterator over the owned keys in arbitrary order.',
  },
  {
    name: 'into_values',
    args: [],
    category: ['Constructors', 'a HashMap/BTreeMap'],
    url: 'https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.into_values',
    description: 'Moves the HashMap, returning an iterator over the owned values in arbitrary order.',
  },
  {
    name: 'values_mut',
    args: [],
    category: ['Constructors', 'a HashMap/BTreeMap'],
    url: 'https://doc.rust-lang.org/std/collections/struct.HashMap.html#method.values_mut',
    description: 'An iterator visiting all values mutably in arbitrary order.',
  },
  // From CLI arguments
  {
    name: 'args',
    args: [],
    category: ['Constructors', 'CLI arguments'],
    url: 'https://doc.rust-lang.org/std/env/fn.args.html',
    description: 'Returns the arguments that this program was started with (normally passed via the command line).',
  },
  {
    name: 'args_os',
    args: [],
    category: ['Constructors', 'CLI arguments'],
    url: 'https://doc.rust-lang.org/std/env/fn.args.html',
    description:
      'Returns the arguments that this program was started with as <code>OsString</code>s (normally passed via the command line).',
  },
  // From environment variables
  {
    name: 'vars',
    args: [],
    category: ['Constructors', 'environment variables'],
    url: 'https://doc.rust-lang.org/std/env/fn.vars.html',
    description:
      'Returns an iterator of (variable, value) pairs of strings, for all the environment variables of the current process.',
  },
  {
    name: 'vars_os',
    args: [],
    category: ['Constructors', 'environment variables'],
    url: 'https://doc.rust-lang.org/std/env/fn.vars_os.html',
    description:
      'Returns an iterator of (variable, value) pairs of <code>OsString</code>s, for all the environment variables of the current process.',
  },
  // From file path
  {
    name: 'ancestors',
    args: [],
    category: ['Constructors', 'a file path'],
    url: 'https://doc.rust-lang.org/std/path/struct.Path.html#method.ancestors',
    description: 'Produces an iterator over <code>Path</code> and its ancestors.',
  },
  {
    name: 'components',
    args: [],
    category: ['Constructors', 'a file path'],
    url: 'https://doc.rust-lang.org/std/path/struct.Path.html#method.components',
    description: 'Produces an iterator over the <code>Component</code>s of the path.',
  },
  {
    name: 'read_dir',
    args: [],
    category: ['Constructors', 'a file path'],
    url: 'https://doc.rust-lang.org/std/fs/fn.read_dir.html',
    description: 'Returns an iterator over the entries within a directory.',
  },
  // From BufReader
  {
    name: 'bytes',
    args: [],
    category: ['Constructors', 'Read/BufRead'],
    url: 'https://doc.rust-lang.org/std/io/trait.Read.html#method.bytes',
    description: 'Transforms this <code>Read</code> instance to an <code>Iterator</code> over its bytes.',
  },
  {
    name: 'lines',
    args: [],
    category: ['Constructors', 'Read/BufRead'],
    url: 'https://doc.rust-lang.org/std/io/trait.BufRead.html#method.lines',
    description: 'Returns an iterator over the lines of this <code>BufRead</code>.',
  },
  // From Stdin
  {
    name: 'lines',
    args: [],
    category: ['Constructors', 'Stdin'],
    url: 'https://doc.rust-lang.org/std/io/struct.Stdin.html#method.lines',
    description: 'Consumes this handle and returns an iterator over input lines.',
  },
  // From TcpListener
  {
    name: 'incoming',
    args: [],
    category: ['Constructors', 'TcpListener'],
    url: 'https://doc.rust-lang.org/std/net/struct.TcpListener.html#method.incoming',
    description: 'Returns an iterator over the connections being received on this listener.',
  },
  {
    name: 'into_incoming',
    args: [],
    category: ['Constructors', 'TcpListener'],
    url: 'https://doc.rust-lang.org/std/net/struct.TcpListener.html#method.incoming',
    description: 'Turn this into an iterator over the connections being received on this listener.',
    nightly: true,
  },
]
