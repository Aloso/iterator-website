import type { Fn } from '../fns'
import { adapters } from './adapters'
import { constructors } from './constructors'
import { consumers } from './consumers'
import { others } from './other'

export const functions: Fn[] = [...constructors, ...adapters, ...consumers, ...others]
