import spotify from "./clone-spotify.png";
import comercio from "./comercio.png";
import trybewallet from "./trybewallet.png";
import inprogress from "./inprogress.png";

const projectsData = [
  {
    name: "TrybeTunes",
    ghDeploy: "https://lucaseduardolema.github.io/trybetunes/",
    img: inprogress,
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
