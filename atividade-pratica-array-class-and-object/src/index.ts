import { listaDeNumerosAtv1 } from "./atv1/listaDeNumerosAtv1";
import { listaDeNumerosAtv2 } from "./atv2/listaDeNumerosAtv2";
import { Pessoa } from "./atv3/pessoa";
import { Aluno } from "./atv6/aluno";

const atv1 = () => {
  let numImpares = listaDeNumerosAtv1.filter((item) => item % 2 === 1);
  console.log(numImpares);
};

// atv1();

const atv2 = () => {
  let soma = listaDeNumerosAtv2.reduce((soma, num) => soma + num, 0);
  console.log(soma);
};

// atv2();

const atv3 = () => {
  let listaDePessoas = [
    new Pessoa("João", 18, 3000),
    new Pessoa("Maria", 22, 3000),
    new Pessoa("Pedro", 25, 3000),
    new Pessoa("Ana", 20, 3000),
    new Pessoa("Lucas", 28, 3000),
  ];

  let listaJovens = listaDePessoas.filter((pessoa) => pessoa.idade < 23);

  console.log(listaJovens);
};

// atv3();

const atv4 = () => {
  let listaDePessoas = [
    new Pessoa("João", 28, 3000),
    new Pessoa("Maria", 22, 3000),
    new Pessoa("Pedro", 25, 3000),
    new Pessoa("Ana", 40, 3000),
    new Pessoa("Lucas", 48, 3000),
  ];

  let mediaIdadeMenorQue30 = listaDePessoas
    .filter((pessoa) => pessoa.idade < 30)
    .reduce((soma, num) => soma + num.idade, 0);

  console.log(mediaIdadeMenorQue30 / listaDePessoas.length);
};

// atv4();

const atv5 = () => {
  let listaDePessoas = [
    new Pessoa("João", 28, 3000),
    new Pessoa("Maria", 22, 1000),
    new Pessoa("Pedro", 25, 1600),
    new Pessoa("Ana", 40, 80000),
    new Pessoa("Lucas", 48, 800),
  ];

  let salarioMenorQue1027 = listaDePessoas.filter(
    (pessoa) => pessoa.salario < 1027
  );

  console.log(salarioMenorQue1027);
};

// atv5();

const atv6 = () => {
  const alunos: Aluno[] = [
    new Aluno("João", 20),
    new Aluno("Maria", 22),
    new Aluno("Pedro", 19),
    new Aluno("Ana", 21),
    new Aluno("Lucas", 18),
    new Aluno("Paulo", 20),
    new Aluno("Julia", 23),
  ];

  const gabarito: string[] = ["A", "B", "C", "A", "B", "C", "A", "B", "C", "A"];

  alunos.forEach((aluno) => {
    let nota = 0;
    for (let i = 0; i < gabarito.length; i++) {
      const resposta = Math.floor(Math.random() * 3); // sorteia um número de 0 a 2
      if (gabarito[i] === String.fromCharCode(resposta + 65)) {
        nota++;
      }
    }
    aluno.setNota(nota);
  });

  const aprovados = alunos.filter((aluno) => aluno.Status === "Aprovado");
  const reprovados = alunos.filter((aluno) => aluno.Status === "Reprovado");
  const media =
    alunos.reduce((total, aluno) => total + aluno.Nota, 0) / alunos.length;
  const melhorAluno = alunos.reduce(
    (melhor, aluno) => (aluno.Nota > melhor.Nota ? aluno : melhor),
    alunos[0]
  );
  const piorAluno = alunos.reduce(
    (pior, aluno) => (aluno.Nota < pior.Nota ? aluno : pior),
    alunos[0]
  );

  console.log(
    `Alunos aprovados: ${aprovados.map((aluno) => aluno.Nome).join(", ")}`
  );
  console.log(
    `Alunos reprovados: ${reprovados.map((aluno) => aluno.Nome).join(", ")}`
  );
  console.log(`Média das notas: ${media.toFixed(2)}`);
  console.log(`Melhor aluno: ${melhorAluno.Nome} (nota ${melhorAluno.Nota})`);
  console.log(`Pior aluno: ${piorAluno.Nome} (nota ${piorAluno.Nota})`);
};

atv6();
