<!--
#DOM document object model
-é o html convertido para um Objeto Javascript
-api que representa e interage com HTML
-estrutura de dados do tipo árvore, criada pelo browser
-propriedades e metodos
    Pra que serve
        -javascript usa a DOM para se conectar ao HTML
        -manipular o html com o javascript
        -você só programa para a WEB pq existe a DOM

NodeList aceita usar um foreach por exemplo, diferente do html collection

//getElementById()
console.log(document.getElementById('blog-title'))
const elementid = document.getElementById('blog-title')
console.log(elementid)
//getElementsByClassName()
console.log(document.getElementsByClassName('one'))
const elementclass = document.getElementsByClassName('one')
console.log(elementclass)
//getElementsByTagName()
console.log(document.getElementsByTagName('body'))
const elementtag = document.getElementsByTagName('body')
console.log(elementtag)
//querySelector()
console.log(document.querySelector('#blog-title'))
const elementquery = document.querySelector('.one')
console.log(elementquery)
//querySelectorAll()
console.log(document.querySelectorAll('h1'))
const elementqueryall = document.querySelectorAll('h1')
console.log(elementqueryall)

//Manipulando conteudo

//textContent
elementid.textContent = "Olá Dev!"
console.log(elementid)
//innerText
elementid.innerText = "Olá Desenvolvedores!"
console.log(elementid)
//innerHTML
elementid.innerHTML = "<h1>olá novamente</h1> <h2>bem vindo</h2>"
console.log(elementid)
//value
const element = document.querySelector('input')
console.log(element.value)
element.value = "valor que eu quiser"
console.log(element.value)

//manipulando elementos
//atributos
const header =document.querySelector('header')
header.setAttribute('id', 'header')
console.log(header.getAttribute('class'))
header.removeAttribute('class')

//alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f300"

//classList

const element = document.querySelector('body')
console.log(element.classList)
element.classList.add('active')
console.log(element.classList)
element.classList.remove('active')
console.log(element.classList)
element.classList.toggle('active')
console.log(element.classList)
element.classList.toggle('active')
console.log(element.classList)

//navegando pelos elementos

//parentNode parentElement

const body = document.querySelector('body')

console.log(body.parentNode)
console.log(body.parentElement)

//childNodes children

console.log(body.childNodes)
console.log(body.children)
console.log(body.firstChild)
console.log(body.firstElementChild)
console.log(body.lastChild)
console.log(body.lastElementChild)

//nextSibiling

const el = document.querySelector('header')
console.log(el.nextSibling)
console.log(el.nextElementSibling)
console.log(el.previousSibling)
console.log(el.previousElementSibling)

//criando e adicionando elementos

//createElements

const div = document.createElement('div');

div.innerText = "ola devs"

//append
const body = document.querySelector('body')

body.append(div)
body.prepend(div)

//insertBefore

const div = document.createElement('div');
div.innerText = "Olá Devs!"

//insertBefore
const body = document.querySelector('body')
const header = body.querySelector('header')

body.insertBefore(div, header.nextSibling)

//Eventos

function print() {
    console.log('print')
}

<header>
    <h1 onclick="print()">Olá Dev!</h1>
</header>

//Eventos

function print() {
    console.log('print')
}

const input = document.querySelector('input')

input.onkeypress = function() {
    console.log('tecla acionada')
}
input.onkeydown = function() {
    console.log('tecla pressionada')
}
input.onkeyup = function() {
    console.log('tecla foi solta')
}

const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

input.onkeypress = function(event) {
    //console.log(event)
    console.log(event.currentTarget.value)
}


-->