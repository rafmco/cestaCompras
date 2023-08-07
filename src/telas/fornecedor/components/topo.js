import React from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

import Texto from '../../../components/texto';
import topo from '../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
  return<>
    <Image source={topo} style={estilos.topo} />
    <Texto style={estilos.titulo}>{ titulo }</Texto>
  </>
}

const estilos = StyleSheet.create({
  topo: {
    width: width,
    height: 580 / 768 * width
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16
  },
})
