console.log('Hello World')
/*
Strings
    ""
    ''
    `` template literals ou strings (multi linhas e interpolação)
Number
    int e float
    NaN - not a number
    Infinity
Boolean
    true
    false
Undefined
    indeinido - não exite objeto
Null
    nulo - objeto vazio
Object
    propriedades ou atributos
    fucnionalidades ou metodos
Array
    uma lista
    agrupamento de dados


DataTypes
    primitive
        string
        number
        boolean
        undefined
        symbol
        bigInt
    estruturais
        object
            array
            map
            set
            date
            ...
        function
    structural root primitive
        null


*/
console.log(`1 + 1 = 
${1 + 1}`) //interpolação

console.log({
    nome: "teste",
    type: "teste",
    estado: function() { //metodo dentro do objeto
        console.log('alert')
    }
}); //objeto

console.log([
    "name",
    50,
    ['lsita', 'lista1', 'lista2']
]) //array


//nomes de variaveis não podem iniciar com numeros nem possuir espaços em branco
// uma boa pratica é o camelCase ou snake_case

var variavel = "recebe string" /*var permite ser alterada, é uma variavel global. usando hoisting a var pode ser chamada antes de 
ser declarada */
let variavel1 = "recebe outra string" /*parecido com var porem sem hoisting, portanto só funciona no escopo local, não podendo ser chamda
antes de declarada e inicializada e nem fora do escopo*/
const variavel2 = 3.14 /*contante que não pode ser alterada, pode ter o mesmo nome dentro de escopos diferentes*/

console.log(typeof variavel1) //retorna o tipo da variavel
console.log(`conteudo da variavel 3 é ${variavel2} e da variavel 1 é ` + variavel1) //interpolação e concatenação

//parametros são valores que a função recebe
const sum = function(num1, num2){
    let res = num1 + num2
    return res
}
//argumentos são passados para uma função
let teste = sum(2, 3)

console.log(teste)

const sayMyName = () => { //arrow function - geralmente atribuida a uma constante
    console.log('Iuri')
}
sayMyName()

function sayHello (hello){
    hello()//executa a função de callback
    console.log(hello)//executa a função mostrando a outra função
}// as funções de callback, chamam uma função nomral dentro de outra

sayHello( //chama a função enviando outra função como argumento 
    () => {
        console.log('callback')
    }
)

function Person(name) { //primeira letra maiuscula
    this.name = name //this sempre vai se referenciar ao iuri de fora da função
}

const iuri = new Person("iuri") //torna a função em contrutora com o new criando um novo objeto
console.log(iuri)