abstract class Ingresso {
  constructor(protected valor: number) {}

  abstract imprimeValor(): void;
}

export class Normal extends Ingresso {
  imprimeValor(): void {
    console.log(`Valor do ingresso normal: R$ ${this.valor.toFixed(2)}`);
  }
}

export class Vip extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimeValor(): void {
    console.log(
      `Valor do ingresso VIP: R$ ${(this.valor + this.valorAdicional).toFixed(
        2
      )}`
    );
  }
}

export class Camarote extends Ingresso {
  constructor(valor: number, private valorAdicional: number) {
    super(valor);
  }

  imprimeValor(): void {
    console.log(
      `Valor do ingresso Camarote: R$ ${(
        this.valor + this.valorAdicional
      ).toFixed(2)}`
    );
  }
}
