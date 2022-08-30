// Function types

type Test = (a: number, b: number) => boolean;

const MyFunction: Test = (a, b) => {
  return a > b;
}

console.log(MyFunction(2, 4));

// Funkcje wariadyczne (takie gdzie nie jest znana liczba parameterów)
type SomeNumbers = (...params: number[]) => number

const MyFunctionTwo: SomeNumbers = (...params: number[]) => {
  return params.reduce((acc, curr) => acc + curr);
}

console.log(MyFunctionTwo(1, 2, 3, 4, 5));
