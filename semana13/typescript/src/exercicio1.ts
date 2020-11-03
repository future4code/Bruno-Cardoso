//a.
// let minhaString : string = 1

// console.log(minhaString)

// Aparece a sgeuinte mwensagem : Type 'number' is not assignable to type 'string'

//b.
// let meuNumero = 10
// let meuNumero: number | string; // ou
// let meuNumero : any

//c.
// type pessoaQualquer = {
//   nome: string;
//   idade: number;
//   corFavorita: string;
// };

//d.

// const bruno: pessoaQualquer = {
//   nome: "BrunoCardoso",
//   idade: 28,
//   corFavorita: "Amarelo",
// };

// const josephClimber: pessoaQualquer = {
//   nome: "Jc",
//   idade: 200,
//   corFavorita: "Azul Royal da Noruega",
// };

// const mafalda: pessoaQualquer = {
//   nome: "Mafalda amiga do Bob",
//   idade: 100,
//   corFavorita: "Vermelho com tons de jaboticaba da Jamaica",
// };

//e.

enum CORES_DO_ARCO_IRIS {
  Vermelho = "Vermelho",
  Laranja = "Laranja",
  Amarelo = "Amarelo",
  Verde = "Verde",
  Azul = "Azul",
  Anil = "Anil",
  Violeta = "Violeta",
}

type pessoaQualquer = {
  nome: string;
  idade: number;
  corFavorita: CORES_DO_ARCO_IRIS;
};

const bruno: pessoaQualquer = {
  nome: "BrunoCardoso",
  idade: 28,
  corFavorita: CORES_DO_ARCO_IRIS.Amarelo,
};

const josephClimber: pessoaQualquer = {
  nome: "Jc",
  idade: 200,
  corFavorita: CORES_DO_ARCO_IRIS.Laranja,
};

const mafalda: pessoaQualquer = {
  nome: "Mafalda amiga do Bob",
  idade: 100,
  corFavorita: CORES_DO_ARCO_IRIS.Violeta,
};
