<!--
FORMULÁRIOS DE OUTRO PLANETA
formulários devem ser simples e focados
somente o necessário
requisitos bem pensados
desenhar antes de codar

-form é um container
Atributos básicos
    action - para onde os dados vão ser enviados, quando vazio redireciona para a mesma pagina (default)
    method - POST GET - verbos http
        GET /?name=Iuri&email=icsalgado@icloud.com (dafault)
        POST geralmente na criação de um usuario, onde os dados são escondidos

um form não deve ser criado dentro de outro por ocasionar erros de envio

<form action="" method=""></form>

-fieldset
    agrupamento de campos
    mesmo proposito
    semântico
    acessibilidade

    Atributos especiais
        -disabled   
            desabilita todos os elementos internos
            não precisa estar dentro do formulario
        -form
            o id fe um formulario ao qual esse fieldset pertence
            não precisa estar dentro do formulario
        -name
            nome do campo

-legend
    nome do agrupamento
    primeiro elemento dentro do fieldset

<form>
        <fieldset>
            <legend>Contato</legend>
        </fieldset>
    </form>

    <form id="outro"></form>

    <fieldset form="outro">
        <legend>Outro</legend>
    </fieldset>

-label
    associar ou identificar uma ou mais tags de entrada de dados
    acessibilidade
    vc poderá crlicar para mudar o foco da entrada de dados
    Atributos
        for
            para fazer a conexão entre este label e a tag de entrada
            é feita via id do input
            só funciona com elementos especificos
                button input meter output progress select textarea
<label>
        Nome:
        <input type="text">
    </label>
    
    <label for="name">Nome completo</label>
    <input id="nome" type="text">

-button
    usado para enviar formularios
    estilizado
    Atributos comuns
        type
            submit - enviar (button)
            reset - limpar
        autofocus
        disabled
        name
        value
        form
<form id="meuform" method="GET">
    <input type="txt">
</form>
<button type="submit"  form="meuform">enviar</button>

-datalist
    lista de valores como sugestão a uma tag <input>
    valores não obbrigatorios
    Inputs suportados
        text serach url tel email date month week time datetime-local number range color
    Inputs não suportados
        hidden password checkbox radio file button
<input
        type="text"
        list="fruitdata"
        placeholder="escolha fruta"/>
    
    <datalist id="fruitdata">
        <option>apple</option>
        <option>orange</option>
        <option>banana</option>
    </datalist>

-input
    aceita diversos tipos de dados
    Atributos  
        type="" text date number email file
        name
        id
        autocomplete
        autofocus - apenas um por pagina sempre
        disable
        readonly
        value
        form
        name
        required
        placeholder 
    type=""
        password
            minlength
            maxlength
            size - tamanho do campo
            pattern="[0-9a-fA-F]{4,8}" - hexadecimal entre 4 a 8 caracteres
            placeholder
            readonly
            desable
            required
            inputmode="numeric" - abre teclado numerico em smartphones
            autocomplete="off" -não deixa o navegador sugerir senha
        email
            placeholder
            readonly
            value
            required
            multiple - mais e-mail separados por virgula
            minlength
            maxlength
            size
            pattern=".+@rocketseat\.com\.br" - exemplo
        URL
            placeholder="http://example.com"
            pattern=".*\.com\.br."
        file
            <fomr action="" method="post" enctype="multipart/form-data">
            value
            accept=".pdf" - tipo de documento
            files
            multiple
        color
            value: RGB
        checkbox
            globais
            value
            checked
        radio
            checked
            value
        serach
            list
            pattern
        number
            min/max
            step="100" - pula de 100 em 100
        range
            min/max
            step
        date
            value="yyyy-mm-dd"
    textarea
        id
        name
        rows e cols
        maxlength minlength
        wrap="soft" - embrulhar dentro do campo
-select
    option value=""
    optgroup label=""




<form>
        <fieldset>
            <legend>Contato</legend>
            <label for="name">Nome</label>
            <br><input id="name" type="text" name="name">
            <br><label for="email">E-mail</label>
            <br><input id="email" type="email" name="email">
            <br><label for="message">Mensagem</label>
            <br><textarea name="message" id="message" cols="50" rows="5"></textarea>
            <br><button type="submit">Enviar</button>
        </fieldset>
</form>
-->