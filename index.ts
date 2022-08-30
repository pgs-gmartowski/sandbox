interface Queue {
  state: number
  push(val: string): void;
  pop(): string | undefined;
}

class ArrayQueue implements Queue {
  private array: string[] = [];
  constructor(public state: number) {}
  push(val: string) {
    this.array.push(val);
  }

  pop() {
    return this.array.pop();
  }
}
