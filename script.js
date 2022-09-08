const idadeDoDependente = +prompt("Qual a idade do dependente?");
//if e if
//ifs aninhados
if (idadeDoDependente >= 13) {
  if (idadeDoDependente <= 17) {
    console.log(
      "Seu dependente ja pode ter um cartão de credito vinculado ao seu!"
    );
  } else {
    console.log(
      "Cosulte outras possibilidade do labank para dependente maior que 17 anos!"
    );
  }
} else {
  console.log(
    "Cosulte outras possibilidade do labank para dependente menor que 13 anos!"
  );
}
//operador logico
if (idadeDoDependente >= 13 && idadeDoDependente <= 17) {
  console.log(
    "Seu dependente ja pode ter um cartão de credito vinculado ao seu!"
  );
} else {
  console.log("Cosulte outras possibilidade do labank");
}
//if ternário
idadeDoDependente === 13
  ? console.log("A idade do dependente é 13 e ja pode ter um cartão")
  : console.log("Verifique as opções possíveis");
//switch case
const cartao = Number(prompt("qual a opção de cartão?"));
switch (cartao) {
  case 1:
    console.log("cartao Fácil escolhido");
    break;
  case 2:
    console.log("cartao Black escolhido");
    break;
  case 3:
    console.log("cartao Platinum escolhido");
    break;
  case 4:
    console.log("cartao Master Gold escolhido");
    break;
  default:
    console.log("escolha uma das quatro opções");
}
//1
const numero = Number(prompt("digite um numero divisivel por 2 e 3"));
//aninhados
if (numero % 2 === 0) {
  if (numero % 3 === 0) {
    console.log("Numero é divisivel por 2 e 3");
  } else {
    console.log("Numero é divisivel por 2");
  }
} else if (numero % 3 === 0) {
  console.log("Numero é divisivel por 3");
} else {
  console.log("Numero não é divisivel por 2 e 3");
}

//operador logico
if (numero % 2 === 0 && numero % 3 === 0) {
  console.log("Numero é divisivel por 2 e 3");
} else {
  console.log("Numero não é divisivel por 2 e 3");
}

//2
if (numero % 2 === 0 && numero % 3 === 0) {
  console.log(numero === 30 ? "UFA ACERTEI" : "não foi dessa vez :(");
  console.log("Numero é divisivel por 2 e 3");
} else {
  console.log("Numero não é divisivel por 2 e 3");
}

//3
if (numero % 2 === 0 && numero % 3 === 0) {
  switch (numero) {
    case 6:
      console.log("acertei no 6");
      break;
    case 12:
      console.log("acertei no 12");
      break;
    case 18:
      console.log("acertei no 18");
      break;
    case 24:
      console.log("acertei no 24");
      break;
    case 30:
      console.log("acertei no 30");
      break;
    default:
      console.log("não acertei nenhum");
  }
  console.log("Numero é divisivel por 2 e 3");
} else {
  console.log("Numero não é divisivel por 2 e 3");
}
