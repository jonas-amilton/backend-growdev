export class Aluno {
  Nome: string;
  Idade: number;
  Nota: number;
  Status: string;

  constructor(nome: string, idade: number) {
    this.Nome = nome;
    this.Idade = idade;
    this.Nota = 0;
    this.Status = "Em andamento";
  }

  setNota(nota: number) {
    this.Nota = nota;
    this.Status = nota >= 6 ? "Aprovado" : "Reprovado";
  }
}
