export class Counter {
  value: number;

  constructor() {
    this.value = 0;
  }

  reset() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  getValue() {
    return this.value;
  }
}
