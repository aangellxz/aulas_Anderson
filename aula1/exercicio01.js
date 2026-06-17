// ATV 1 
// let usuario =  "Lizi";
// console.log(`Olá, ${usuario}. Bem vin`);

// ATV 2 
// const variaveis = {
//     nome : "Maria José",
//     cargo : "Auxiliar Administração",
//     tempoExperiencia : "2 anos"
// };

// console.log(`O funcionário ${variaveis.nome}, trabalha no cargo de ${variaveis.cargo} há ${variaveis.tempoExperiencia}`);

// ATV 3
// let valorTotal = 5000;
// let bonificacao = valorTotal / 10;

// console.log(`O valor total da venda foi de R$${valorTotal}. Com a bonificação: R$${bonificacao}. O total da venda ficou R$${(valorTotal + bonificacao)}`);

// ATV 4

// let idade = 15;

// if(idade > 18){
//       console.log(`Acesso Autorizado 👍`);
// } else if(idade < 0){
//      console.log(`Não minta a sua idade`);
// } else{
//     console.log(`Acesso Negado 👎`);    
// };

// ATV 5

// let prioridade = 4;

// if(prioridade == 1){
//     console.log(`Prioridade baixa`);
// } else if(prioridade == 2){
//      console.log(`Prioridade média`);
// } else if(prioridade == 3){
//      console.log(`Prioridade alta`);
// } else{
//     console.log(`prioridade INVÁLIDA, insira 1,2,3!`);
// };

// ATV 6
// const opcao = '1';

// switch (opcao) {
//   case '1':
//     console.log('Financeiro');
//     break;
//   case '2':
//     console.log('Comercial');
//     break;
//   case '3':
//     console.log('Suporte Técnico');
//     break;
//   case '4':
//     console.log('Recursos Humanos');
//     break;
//   default:
//     console.log('Opção inválida.');
// };

// ATV 7

// for(let tarefa = 1; tarefa <= 10; tarefa ++){
//    console.log(`Executando tarefa ${tarefa}`);
// };


// ATV 8

// let nomes = ["Liza", "Kaio", "Kallebes", "Leticya", "Jhennifer"];

// for (const n of nomes) {
//     console.log(`Integrante: ${n}`);
    
// };

// ATV 9

// let num = [1,2,3,4,5,6,7];
// let total = num.reduce((acc, n)=> acc + n)
// let media = total / num.length
// const maiorValor = Math.max(...num);
// const menorValor = Math.min(...num);


// console.log(total);   
// console.log(media.toFixed(2));  
// console.log( maiorValor);
// console.log( menorValor);

// ATV 10

// const produtos = [
//     {
//        nome : "Rádio",
//       quantidade : 12
//     },

//     {
//        nome : "teclado",
//       quantidade : 4
//     },

//     {
//        nome : "mouse",
//       quantidade : 34
//     },

//     {
//        nome : "gabinete",
//       quantidade : 8
//     },

//     {
//        nome : "monitor",
//       quantidade : 1
//     }
// ] ;

// for(let produto of produtos){
//     if(produto.quantidade < 5){
//         console.log(`Esse produto: ${produto.nome}: Repor Estoque`);
//     } else{
//         console.log(`Esse produto: ${produto.nome}: Está OK!`)
//     }
// };


// ATV 12
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const SENHA_CORRETA = "12345"; 

// const verificarAcesso = (nome, idade, senha) => {
//   idade = parseInt(idade);
 

//   if (senha !== SENHA_CORRETA) {
//     console.log(`\nSenha incorreta! Acesso negado.`);
//     rl.close();
//     return;
//   }
 

//   if (idade >= 18) {
//     console.log(`\nOlá ${nome}, seu acesso ao terminal foi liberado.`);
//   } else {
//     console.log(`\nDesculpe ${nome}, você está bloqueado. Acesso negado.`);
//   }
 
//   rl.close();
// };

// rl.question('Digite seu nome: ', (nome) => {
//   rl.question('Digite sua idade: ', (idade) => {
//     rl.question('Digite sua senha: ', (senha) => {
//       verificarAcesso(nome, idade, senha);
//     });
//   });
// });

//ATV 13

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Digite o valor em Reais (BRL): ', (valorStr) => {
//   rl.question('Digite a cotação atual do Dólar (USD): ', (cotacaoStr) => {
//     const valor = parseFloat(valorStr);
//     const cotacao = parseFloat(cotacaoStr);

//     const resultado = valor / cotacao;

//     console.log(`Resultado: R$ ${valor.toFixed(2)} equivalem a $ ${resultado.toFixed(2)} USD.`);

//     rl.close();
//   });
// });

//ATV 14

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const produtos = [];

// function perguntarProduto(numero) {
//   if (numero > 3) {
//     console.log('\n=== Relatório de Itens Cadastrados ===');
//     console.log('Lista de produtos:', produtos);
//     rl.close();
//     return;
//   }

//   rl.question(`Digite o nome do produto ${numero}: `, (nome) => {
//     produtos.push(nome);
//     perguntarProduto(numero + 1);
//   });
// }

// perguntarProduto(1);

//ATV 15

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// let soma = 0;
// let quantidade = 0;

// function perguntarNota() {
//   rl.question('Digite uma nota (ou um número negativo para encerrar): ', (valor) => {
//     const nota = parseFloat(valor);

//     if (nota < 0) {
//       console.log('\n=== Relatório de Qualidade ===');
//       if (quantidade === 0) {
//         console.log('Nenhuma nota válida foi informada.');
//       } else {
//         console.log(`Quantidade de notas processadas: ${quantidade}`);
//         console.log(`Média final do lote: ${(soma / quantidade).toFixed(2)}`);
//       }
//       rl.close();
//       return;
//     }

//     soma += nota;
//     quantidade++;
//     perguntarNota();
//   });
// }

// perguntarNota();