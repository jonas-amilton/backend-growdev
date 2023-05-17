export class Aluno {
  nome: string;
  idade: number;
  nota: number;
  status: string;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
    this.nota = 0;
    this.status = "Em andamento";
  }

  setNota(nota: number) {
    this.nota = nota;
    this.status = nota >= 6 ? "Aprovado" : "Reprovado";
  }
}
