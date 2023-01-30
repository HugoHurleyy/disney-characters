import React from "react";
import { fetchCharacter } from "@/helpers/fetch-data";
import Character from "@/components/Character/Character";
import Head from "next/head";

const CharacterPage = (props) => {
  const { data: character } = props;

  return (
    <>
      <Head>
        <title>{character.name}</title>
        <link
          rel="icon"
          type="image/png"
          href={
            "https://www.pngall.com/wp-content/uploads/12/Walt-Disney-Logo-PNG-File.png"
          }
        ></link>
        <meta
          name="google-site-verification"
          content="0TKU6SQ-LXgjEqGoHYhb7R3_MiynsEi6wdccr_Q9XdQ"
        />
        <meta
          name="description"
          content={`${character.name} kimdir? Oynadığı filmler tv şovları video oyunları ve daha fazlası sizlerle birlikte`}
        />
        <meta
          name="keywords"
          content={`${character.name},${character.films.map(
            (film) => film
          )},${character.shortFilms.map(
            (film) => film
          )},${character.tvShows.map(
            (film) => film
          )},${character.videoGames.map(
            (film) => film
          )},${character.parkAttractions.map(
            (film) => film
          )},${character.allies.map((film) => film)},${character.videoGames.map(
            (film) => film
          )},${character.enemies.map((film) => film)}`}
        />
      </Head>{" "}
      <Character character={character} />
    </>
  );
};

export const getServerSideProps = async function (context) {
  const { id } = context.params;
  const data = await fetchCharacter(id);
  if (!data)
    return {
      notFound: true,
    };
  return {
    props: {
      data,
    },
  };
};
export default CharacterPage;
