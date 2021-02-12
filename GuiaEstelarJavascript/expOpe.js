let number = 1; //para que não pareça que a variavel chame uma função usa-se o ponto e virgula, apenas neste caso a principio

(function (){
    console.log('alo')
})()

const name = new String('Iuri') //new irá criar um objeto
console.log(name)
name.surName = "Salgado"
console.log(name)

delete name.surName //procura uma propriedade do objeto e remove
console.log(name)

/*
    Operadores aritmeticos
    + soma 
    - subtração 
    / divisão
    * multiplicação
    ** potenciação
    % resto da divisão
    ++ incremento
    -- decremento
    Operadores de comparação
    == igual
    === igual em relação tbm a tipo
    != diferente
    !== diferente em relação tbm a tipo
    > maior >= maior ou igual
    < menor <= menor ou igual
    Operadores de atribuição
    = atribui um valor
    += atribui a variavel + 1
    -=
    *=
    /=
    %=
    **=
    Operadores lógicos
    && and 
    || or
    ! not
    Operador condicional ternario
        condition ? value1fortrue : value2forfalse

    FALSY - tipo sempre falso
    false
    0
    -0
    ""
    null
    undefined
    NaN
    TRUTHY - tipo sempre verdadeiro
    true
    {}
    []
    1
    3.23
    -1
    Infinity
    -Infinity
    Precedencia de operadores
    () grouping
    ! ++ --
    * /
    + -

    < <= > >=
    == != === !==
    &&
    ||
    ?:
    = += -= *=
*/

let numero = 1
let outroNumero = 2

if(numero === outroNumero){
    console.log('if')
} else if (numero + outroNumero === 1){
    console.log('else if')
} else {
    console.log('else')
}

function sayMyName (name = ''){
    if (name === ''){
        throw 'Nome obrigatorio' //para a execução da função 
    }

    console.log('depois do erro')
}

try{
    sayMyName('')
} catch(e){
    console.log(e)
} //faz a captura de erros sem travar a execução do programa

for(let i = 10; i > 0; i--){
    if(i === 5){
        continue;//pula quando atender a condição
    }
    if(i === 2){
        break;//para quando atender a condição
    }
    console.log(i)
}

let texto = 'iuri'

for(let char of texto){//for of pega cada caracter de um array
    console.log(char)
}

let person = {
    nome: 'fulano',
    age: 30
}

for(let teste in person){
    console.log(teste)
    console.log(person[teste])
}