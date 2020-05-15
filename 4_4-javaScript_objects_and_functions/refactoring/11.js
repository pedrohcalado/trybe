//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

function liquido(salarioBruto) {
  let aliquotaINSS;
  let aliquotaIR;
  let deducaoIR;
  let salarioBase;
  let salarioLiquido;
  
  if (salarioBruto <= 1556.94){
      aliquotaINSS = salarioBruto*(0.08);
      salarioBase = salarioBase;
  } else if (salarioBruto <= 2594.92){
      aliquotaINSS = salarioBruto*(0.09);
      salarioBase = salarioBase;
  } else if (salarioBruto <= 5189.82){
      aliquotaINSS = salarioBruto*0.11;
      salarioBase = salarioBase;
  } else {
      aliquotaINSS = 570.88;
      salarioBase = salarioBase;
  }
  
  salarioBase = salarioBruto - aliquotaINSS;
  
  if (salarioBase <= 1903.68){
      aliquotaIR = 0;
  } else if (salarioBase <= 2826.65) {
      aliquotaIR = 0.075;
      deducaoIR = 142.80;
  } else if (salarioBase <= 3751.05) {
      aliquotaIR = 0.15;
      deducaoIR = 354.80;
  } else if (salarioBase <= 4664.68) {
      aliquotaIR = 0.225;
      deducaoIR = 636.13;
  } else {
      aliquotaIR = 0.275;
      deducaoIR = 869.36;
  }
  
  salarioLiquido = salarioBase - ((salarioBase*aliquotaIR) - deducaoIR);
  console.log (salarioLiquido)
}

liquido(3000);