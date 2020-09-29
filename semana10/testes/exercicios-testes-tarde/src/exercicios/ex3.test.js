import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {
  test("retorna true para itens duplicados", () => {
    // preparação
    const arrayDeNumerosTrue = [1, 1];

    // execução
    const resultado = checaItensDuplicados(arrayDeNumerosTrue);

    // verificação
    expect(resultado).toEqual(true);
  });

  test("retorna true para itens duplicados", () => {
    //preparação
    const arrayDeNumerosTrue = [1, 2, 1];

    //execução
    const resultado = checaItensDuplicados(arrayDeNumerosTrue);

    //verificação
    expect(resultado).toEqual(true);
  });

  test("retorna false para arrays vazios", () => {
    //preparação
    const arrayDeNumerosFalse = [];

    //execução
    const resultado = checaItensDuplicados(arrayDeNumerosFalse);

    //verificação
    expect(resultado).toEqual(false);
  });

  test("retorna false se não houver itens duplicados", () => {
    //preparação
    const arrayDeNumerosFalse = [1, 2, 3];

    //execução
    const resultado = checaItensDuplicados(arrayDeNumerosFalse);

    //verificação
    expect(resultado).toEqual(false);
  });

  test("retorna true por ser um array de letras duplicadas", () => {
    //preparação
    const arrayDeLetras = ["a", "a", "b", "c"];

    //execução
    const resultado = checaItensDuplicados(arrayDeLetras);

    //verificação
    expect(resultado).toEqual(true);
  });

  test("Não identifica duplicados em array de triplicados", () => {
    const arrayDeTriplicados = [7, 7, 7];
    const resultado = checaItensDuplicados(arrayDeTriplicados);
    expect(resultado).toEqual(true);
  });
});
