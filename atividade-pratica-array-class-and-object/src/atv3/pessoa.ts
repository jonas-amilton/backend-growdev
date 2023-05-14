export class Pessoa {
  constructor(
    public nome: string,
    public idade: number,
    public salario: number
  ) {}

  public listaPessoas(nome: string, idade: number, salario: number) {
    this.nome = nome;
    this.idade = idade;
    this.salario = salario;
  }
}
