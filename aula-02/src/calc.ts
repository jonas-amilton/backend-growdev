export class Calc {
  historyCalc: Array<number>;
  result: number;

  constructor() {
    this.historyCalc = [];
  }

  som(num: number, num2: number) {
    this.result = num + num2;
    this.historyCalc.push(this.result);
  }

  sub(num: number, num2: number) {
    this.result = num - num2;
    this.historyCalc.push(this.result);
  }
  div(num: number, num2: number) {
    this.result = num / num2;
    this.historyCalc.push(this.result);
  }
  mul(num: number, num2: number) {
    this.result = num * num2;
    this.historyCalc.push(this.result);
  }

  showResult() {
    return this.historyCalc;
  }
}
