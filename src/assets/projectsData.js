import spotify from "./clone-spotify.png";
import comercio from "./comercio.png";
import trybewallet from "./trybewallet.png";
import  trybetunes from './trybetunes.png'
import starwars from "./starwars.png"
import recipes from './recipesApp.JPG'

const projectsData = [
  {
    id: 0,
    name: "App de Recitas",
    ghDeploy: "https://lucaseduardolema.github.io/recipes-app/",
    img: recipes,
    text: "Nesse projeto desenvolvi um app de receitas em React com foco em dispositivos mobile, originalmente um projeto em grupo, desenvolvendo suas funcionalidades de acordo com demandas definidas em um quadro Kanban e metodologias ágeis, em um cenário próximo ao do mercado de trabalho. Agora refatorado por mim para que eu treinasse o uso Hooks em conjunto com o Redux, nele é possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas e drinks, sua base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.",
    ghCode: "https://github.com/lucaseduardolema/recipes-app",
  },
  {
    id: 1,
    name: "Star Wars Planets",
    ghDeploy: "https://lucaseduardolema.github.io/star-wars-planets/",
    img: starwars,
    text: "Nesse projeto desenvolvi uma aplicação React Function Components utilizando Context API e Hooks para controlar os estados globais, a aplicação funciona consumindo um API de dados sobre o universo de Star Wars, assim a pessoa usuária pode utilizar diversos filtros cumulativos ou não à sua escolha. Confira o Readme.md para mais informações.",
    ghCode: "https://github.com/lucaseduardolema/star-wars-planets",
  },
  {
    id: 2,
    name: "TrybeTunes",
    ghDeploy: "https://lucaseduardolema.github.io/trybetunes/",
    img: trybetunes,
    text: "Neste projeto criei uma aplicação React Class Components, utilizando o estado local dos componentes para reproduzir músicas das mais variadas bandas e artistas, criar uma lista de músicas favoritas e editar o perfil da pessoa usuária logada. Confira o Readme.md para mais informações.",
    ghCode: "https://github.com/lucaseduardolema/trybetunes",
  },
  {
    id: 3,
    name: "TrybeWallet",
    ghDeploy: "https://lucaseduardolema.github.io/trybewallet/",
    img: trybewallet,
    text: "Nesse projeto desenvolvi uma aplicação React Class Components em conjunto com o Redux, trata-se de uma carteira de controle de gastos com conversor de moedas em que o usuário é capaz de adicionar, remover e editar um gasto, visualizar uma tabela com seus gastos, visualizar o total de gastos convertidos para o real, tais dados são consumidos via API e todas as ações são gerenciadas pelo Redux por meio de um store global, reducers, dispatchers e actions síncronas e assíncronas. Confira o Readme.md para mais informações.",
    ghCode: "https://github.com/lucaseduardolema/trybewallet",
  },
  {
    id: 4,
    name: "Spotify Clone",
    ghDeploy: "https://lucaseduardolema.github.io/spotify-clone/",
    img: spotify,
    text: "Clone o serviço de streaming de música Spotify, projeto simples feito em HTML, CSS e JavaScript puros.",
    ghCode:
      "https://github.com/lucaseduardolema/lucaseduardolema.github.io/tree/main/spotify-clone",
  },
  {
    id: 5,
    name: "Página de Comércio",
    ghDeploy: "https://lucaseduardolema.github.io/saru/",
    img: comercio,
    text: "Página de um estabelecimento comercial, projeto simples feito em HTML, CSS e JavaScript puros.",
    ghCode:
      "https://github.com/lucaseduardolema/lucaseduardolema.github.io/tree/main/saru",
  },
];

export default projectsData;
