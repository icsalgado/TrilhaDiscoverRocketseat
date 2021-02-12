/*
    __proto__

    type conversion vs type coersion

*/

console.log('9' + 5) // concatena string com numero
console.log(Number('9') + 5) // converte a string '9' para numero e soma 5
let string = 123
console.log(string)
console.log(String(string)) //converte para string

let word = 'paralelepipedo'
console.log(word.length) //tamanho em caracteres da palavra
let numero = 123456
console.log(String(numero).length) //length só retorna para strings nesse caso passamos o numero para uma string e lemos o tamanho

console.log(numero.toFixed(2).replace('.', ',')) /*mostra o numero com duas casas decimais e troca o pornto por virgula
com isso transforma o numero em string*/

console.log(word.toLocaleUpperCase()) //chama o metodo para exibir toda a string em caixa alta

console.log(word.includes('a')) //verifica se a o argumento existe na string

let phrase = "teste de java script"
let myArray = phrase.split(" ") // trnasformo a string em array usando como separador os espaços
console.log(phrase)
console.log(myArray)
let array = myArray.join("_") //transformo o array em string usando o underscore como separador
console.log(array)

console.log(Array.from(word)) //transforma cada caracter da string em um elemento array

myArray.push("incluindo")
console.log(myArray)
myArray.unshift("incluindo")
console.log(myArray)
myArray.pop()
console.log(myArray)
myArray.shift()
console.log(myArray)
console.log(myArray.slice(2,3)) //retorna do array a partir da posição 2 até a 3
console.log(myArray)
console.log(myArray.indexOf('java')) //mostra o index do elemento do array
myArray.splice(1, 2) //remove do array a partir da posição 1, 2 elementos
console.log(myArray)