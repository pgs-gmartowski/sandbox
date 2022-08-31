const t = Symbol('dsd')
const b = Symbol('daaa')

const test: Record<symbol, boolean> = {
  [t]: true,
  [b]: false
}
console.log(test);

const someGeneric = {}
