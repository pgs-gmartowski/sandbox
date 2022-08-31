type test = (a: number, b: number) => number;

const test1: test = (a, b) => a * b;

// Overloading

interface Document {
  create(el: string): HTMLAllCollection;

  create(el: number): HTMLAllCollection;

  create(el: boolean): HTMLAllCollection;

  create(el: 'input'): HTMLAllCollection;
}

type Dictionary = Record<number, number>;
const t: Dictionary = {
  1: 1
}
