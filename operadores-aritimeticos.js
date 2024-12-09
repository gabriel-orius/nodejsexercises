const notaPrimeiroBi = 10;
const notaSegundoBi = 6;
const notaTerceiroBi = 9.3;
const notaQuartoBi = 6;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi)/4;

if(media>=7){
    media += media * 0.1;
}

console.log(`a média é ${media.toFixed(2)}`);