import React from "react";
import Home from "@/components/Home/Home";
import { fetchAllCharacters } from "@/helpers/fetch-data";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Anasayfa || 7438 Disney karakteri mevcut</title>
        <link
          rel="icon"
          type="image/png"
          href={
            "https://www.pngall.com/wp-content/uploads/12/Walt-Disney-Logo-PNG-File.png"
          }
        ></link>
        <meta
          name="description"
          content="7438 disney karakteri tek bir yerde"
        />
        <meta
          name="keywords"
          content="disney,karakterler,tatil,disneyland,disney world,macera,fantazi,aile,eğlence,park yerleri"
        />
      </Head>
      <Home data={props} />
    </>
  );
};

export const getServerSideProps = async function (context) {
  const { pageNum } = context.params;
  const data = await fetchAllCharacters(pageNum);
  if (!data.count) {
    return {
      notFound: true,
    };
  }
  return {
    props: data,
  };
};

export default HomePage;
