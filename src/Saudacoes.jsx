import React from 'react'

// componente com 3 funções.

const BoaTarde = props => <h3> Boa Tarde {props.nome} </h3>

const BomDia = props => <h3> Bom dia {props.nome} </h3>

const BoaNoite = props => <h3> Boa Noite {props.nome} </h3>

// essas 3 funções podem ser utilizadas externamente
export default {BoaTarde, BomDia, BoaNoite}