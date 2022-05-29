const prompt = require('prompt-sync')();
console.clear();

console.log("        DETETIVE");

let RespostaSim = 0

let pergunta1 = prompt('Você conhece a vitima [S/N] ? ').toUpperCase();
let pergunta2 = prompt('Você estava no trabalho no dia do crime [S/N] ? ').toUpperCase();
let pergunta3 = prompt('você costuma beber durante o trabalho [S/N] ? ').toUpperCase();
let pergunta4 = prompt('Você tinha alguma relação com a vitima [S/N] ? ').toUpperCase();
let pergunta5 = prompt('você ja praticou tiro esportivo [S/N] ? ').toUpperCase();
console.log();

if(pergunta1 == 'S'){
    RespostaSim++
}
if(pergunta2 == 'S'){
    RespostaSim++
}
if(pergunta3 == 'S'){
    RespostaSim++
}
if(pergunta4 == 'S'){
    RespostaSim++
}
if(pergunta5 == 'S'){
    RespostaSim++
}

if(RespostaSim >= 4){
    console.log('Você é CULPADO pela morte na jovem.');
}else if(RespostaSim == 3){
    console.log('Você é SUSPEITO de estar envolvido na morte da jovem.');
}else{
    console.log('Você é INOCENTE, pode seguir o seu caminho em paz.');
}
console.log();