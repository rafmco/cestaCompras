/* Dados fictícios para substuir as funções originais e para evitarmos
    'sujar' os dados originais enquanto testamos a aplicação.

   Também usamos por não ter nenhum banco de dados ou nenhuma API para fazermos requisições,
    e retornar esses dados. Então, usamos esse arquivo para simbolizar essa API ou banco de dados */
import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';

const agenda = {
  topo: {
    titulo: "Detalhe da Agenda"
  },

  detalhes: {
    nome: "Lista de Agendas",
    logoFornecedor: logo,
    nomeFornecedor: "Invicta Barbearia",
    descricao: "Uma barbearia com produtos diferenciados e atendimento especial",
    preco: "R$ 30,00",
    botao: "Comprar",
  },

  itens: {
    titulo: "Itens da agenda",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      }
    ]
  }
}

export default agenda;