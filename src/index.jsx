// vamos importar a classe React da biblioteca react
import React from 'react'
// vamos importar a classe ReactDom da biblioteca react-dom
import ReactDom from 'react-dom'
// vamos importar o componente Primeiro.jsx
import Primeiro from './Primeiro'
// vamos importar o componente Segundo
import Segundo from './Segundo'
// vamos importar o componente Terceiro
import Terceiro from './Terceiro'
// vamos importa o componente Carro
import Carro from './Carro'

import Saudacoes from './Saudacoes'

// vamos usar o componente, executando a função para que a mensagem apareça para o usuário
// o componente é utilizado dentro da função render para aparecer ao usuário
// na pasta public, tem um arquivo chamado index.html. neste arquivo, tem uma div cujo id é root,
// portanto, o que será mostrado ao usuário estará localizado na div.
// quando usamos dois ou mais elementos, precisamos colocar um elemento pai para eles. como a div
// além do div, podemos utilizar um recurso do próprio react para ter um elemento pai
ReactDom.render(
    <React.Fragment>
        <Primeiro/>
         <Segundo/>
         <Terceiro nome="Jonas" endereco="Rua Teste" telefone="9999.9999"/>
         <Carro marca="GM" modelo="Onix" velocidade="120" ano="2020"/>
         <Saudacoes.BoaNoite nome="Paulo"/>
         <Saudacoes.BoaTarde nome="Saulo"/>
         <Saudacoes.BomDia nome="Jean"/>
    </React.Fragment>, document.getElementById("root"))
