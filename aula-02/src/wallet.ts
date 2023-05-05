export class Wallet {
  numberWallet: number;
  name: string;
  cash: number;

  constructor() {
    this.numberWallet = 1;
    this.name = "Jonas";
    this.cash = 0;
  }

  altName(newName: string) {
    this.name = newName;
  }

  deposit(newDeposit: number) {
    this.cash = newDeposit;
  }

  toWithdraw(withdraw: number) {
    this.cash = this.cash - withdraw;
  }

  showData() {
    return [this.name, this.cash, this.numberWallet];
  }
}
