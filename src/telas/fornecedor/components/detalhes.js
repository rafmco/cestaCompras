import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../components/texto';
import Botao from '../../../components/botao';

export default function Detalhes({ nome, logoFornecedor, nomeFornecedor, descricao, preco, botao }) {
  return<>
    <Texto style={estilos.nome}>{ nome }</Texto>

    <View style={estilos.fornecedor}>
      <Image source={logoFornecedor} style={estilos.imagemAgenda} />
      <Texto style={estilos.nomeFornecedor}>{ nomeFornecedor }</Texto>
    </View>

    <View style={{flexDirection: 'row'}}>
      <Texto style={estilos.descricao}> { descricao }</Texto>
    </View>

    <Texto style={estilos.preco}>{ preco }</Texto>

    <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
  </>
}

const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fornecedor: {
    flexDirection: "row",
    paddingVertical: 12
  },
  imagemAgenda: {
    width: 32,
    height: 32
  },
  nomeFornecedor: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    flex: 1,
    width: 1
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  },
  botao: {
    marginTop: 16,
  }
})
