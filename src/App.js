import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Section from "./components/Section";
import "./styles.css";

const dadosGamesLi = [
  {
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    href: "https://www.twitch.tv/directory/game/VALOR",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },

  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft"
  },

  {
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imgUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
];
const dadosStremersLI = [
  {
    href: "https://www.twitch.tv/maykbrito",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito"
  },
  {
    href: "https://www.twitch.tv/maykbrito",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/e80bff37-09c1-46f0-abf7-e72683dab442-profile_image-150x150.png",
    alt: "Imagem de Dilera"
  },
  {
    href: "https://www.twitch.tv/cellbit",
    imgUrl:
      "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png",
    alt: "Imagemd de Gaules"
  }
];

const dadosSocialLi = [
  {
    href: "https://www.instagram.com/heitorzimmer/",
    imgUrl: "/assets/instagram.svg",
    alt: "Instagram Heitor"
  },
  {
    href: "https://twitter.com/HeitorZimmer",
    imgUrl: "/assets/twitter.svg",
    alt: "twitter Heitor"
  },
  {
    href: "https://www.youtube.com/channel/UCUo2Taqyx_Z5U4BCInseD0g",
    imgUrl: "/assets/youtube.svg",
    alt: "youtube Heitor"
  }
];
export default function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Section
          title="Meus Jogos"
          subtitle="Os games que mais curto jogar!"
          className="games-list"
        >
          {dadosGamesLi.map(function (item) {
            return (
              <ListItem href={item.href} imgUrl={item.imgUrl} alt={item.alt} />
            );
          })}
        </Section>
        <Section
          title="Streams"
          subtitle="Stremers de sucesso!"
          className="channel-list"
        >
          {dadosStremersLI.map(function (item) {
            return (
              <ListItem href={item.href} imgUrl={item.imgUrl} alt={item.alt} />
            );
          })}
        </Section>

        <Section
          title="Minhas redes Sociais"
          subtitle="Se conecte comigo !"
          className="social-list"
        >
          {dadosSocialLi.map(function (item) {
            return (
              <ListItem href={item.href} imgUrl={item.imgUrl} alt={item.alt} />
            );
          })}
        </Section>
      </main>
    </div>
  );
}
