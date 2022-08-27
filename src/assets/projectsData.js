import spotify from "./clone-spotify.png";
import comercio from "./comercio.png";
import trybewallet from "./trybewallet.png";
import  trybetunes from './trybetunes.png'
import inprogress from "./inprogress.png";

const projectsData = [
  {
    name: "TrybeTunes",
    ghDeploy: "https://lucaseduardolema.github.io/trybetunes/",
    img: trybetunes,
    text: "Neste projeto criei uma aplicação capaz de reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Confira o Readme.md para mais informações.",
    ghCode: "https://github.com/lucaseduardolema/trybetunes",
  },
  {
    name: "TrybeWallet",
    ghDeploy: "https://lucaseduardolema.github.io/trybewallet/",
    img: trybewallet,
    text: "Nesse projeto desenvolvi uma aplicação em React de uma carteira de controle de gastos com conversor de moedas em que o usuário é capaz de adicionar, remover e editar um gasto, visualizar uma tabela com seus gastos, visualizar o total de gastos convertidos para o real, tais dados são consumidos via API e todas as ações são gerenciadas pelo Redux por meio de um store global, reducers, dispatchers e actions síncronas e assíncronas na aplicação React. Confira o Readme.md para mais informações.",
    ghCode: "https://github.com/lucaseduardolema/trybewallet",
  },
  {
    name: "Star Wars Planet Search",
    ghDeploy: "",
    img: inprogress,
    text: "Nesse projeto desenvolvi uma aplicação utilizando Context API e Hooks para controlar os estados globais, a aplicação funciona consumindo um API de dados sobre o universo de Star Wars, assim a pessoa usuária pode utilizar diversos filtros cumulativos ou não à sua escolha",
    ghCode: "",
  },
  {
    name: "App de Recitas",
    ghDeploy: "",
    img: inprogress,
    text: "Nesse projeto desenvolvi um app de receitas, utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API! Nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks! A base de dados serão 2 APIs distintas, uma para comidas e outra para bebidas e o layout tem como foco dispositivos móveis.",
    ghCode: "",
  },
  {
    name: "Spotify Clone",
    ghDeploy: "https://lucaseduardolema.github.io/spotify-clone/",
    img: spotify,
    text: "Clone o serviço de streaming de música Spotify",
    ghCode:
      "https://github.com/lucaseduardolema/lucaseduardolema.github.io/tree/main/spotify-clone",
  },
  {
    name: "Página de Comércio",
    ghDeploy: "https://lucaseduardolema.github.io/saru/",
    img: comercio,
    text: "Página de um estabelecimento comercial",
    ghCode:
      "https://github.com/lucaseduardolema/lucaseduardolema.github.io/tree/main/saru",
  },
];

export default projectsData;
