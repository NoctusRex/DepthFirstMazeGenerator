export class Stack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error('Stack has reached max capacity, you cannot add more items');
    }
    this.storage.push(item);
  }

  pop(): T {
    return this.storage.pop() as T;
  }

  peek(): T {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}
