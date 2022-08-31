// Simplest generic
const id = <T>(i: T) => i;
id(7);

// types

type Ref<T> = {
  current: T
}
const ref1: Ref<number> = {current: 1}
const ref2: Ref<string> = {current: 'tes'}
