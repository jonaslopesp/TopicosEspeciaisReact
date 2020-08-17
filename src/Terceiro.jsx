import React from 'react'

// a nossa função default vai receber parâmetros. Isso é importante pois um outro componente
// que for utilizá-lo pode passar valores
// criamos uma arrow function (função com seta)
// substituímos as {} por () e também não usamos o return.
// percebam que estamos utilizando uma função an^nima - sem nome

export default props => (
    <h2>
        Nome: {props.nome}
        Endereço: {props.endereco}
        Telefone: {props.telefone}
    </h2>
)