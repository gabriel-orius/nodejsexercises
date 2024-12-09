var statusAluno = false;
let mensagemFinal ='';
const notaPrimeiroBi = 2;
const notaSegundoBi = 2;
const notaTerceiroBi = 2;
const notaQuartoBi = Number.parseInt('5');
const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

if (total>5){
    statusAluno = true;
} 

if (statusAluno){
    mensagemFinal = ' aprovado!';
} else {
    mensagemFinal = ' reprovado!'; 
}

console.log('A média é ' + total.toFixed(2) + ' e você foi' + mensagemFinal);
