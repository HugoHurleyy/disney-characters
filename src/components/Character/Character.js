import React, { useEffect, useState } from "react";
import {
  Grid,
  Backdrop,
  CircularProgress,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stack } from "@mui/system";
import CharacterAccordion from "./CharacterAccordion";
import Head from "next/head";

const Character = (props) => {
  const [character, setCharacter] = useState();
  useEffect(
    function () {
      setCharacter(props.character);
    },
    [props.character]
  );

  if (!character) {
    return (
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  return (
    <Grid justifyContent="center" justifyItems="center" gap={3} container>
      <Grid xs={12} md={3} item>
        <Stack alignItems="center">
          <img
            style={{ width: "15rem", height: "15rem" }}
            src={character.imageUrl}
            alt={character.name}
          />
          <Typography variant="h4" fontWeight={300} textAlign={"center"}>
            {character.name}
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={12} item md={6}>
        <Stack justifyContent="center" height="100%">
          <CharacterAccordion
            title="Filmler"
            infos={character.films}
            notFound="Bu karaktere ait film bulunamadı"
          />
          <CharacterAccordion
            title="Kısa Filmler"
            infos={character.shortFilms}
            notFound="Bu karaktere ait kısa film bulunamadı"
          />
          <CharacterAccordion
            title="Tv Şovları"
            infos={character.tvShows}
            notFound="Bu karaktere ait tv şovu bulunamadı"
          />
          <CharacterAccordion
            title="Oyunlar"
            infos={character.videoGames}
            notFound="Bu karaktere ait oyun bulunamadı"
          />

          <CharacterAccordion
            title="Park Yerleri"
            infos={character.parkAttractions}
            notFound="Bu karaktere ait park yeri bulunamadı"
          />
          <CharacterAccordion
            title="Müttefikler"
            infos={character.allies}
            notFound="Bu karaktere ait müttefik bulunamadı"
          />
          <CharacterAccordion
            title="Düşmanlar"
            infos={character.enemies}
            notFound="Bu karaktere ait düşman bulunamadı"
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Character;
/*
<Accordion>
  <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1a-content"
     id="panel1a-header"
    >
      <Typography>Filmler</Typography>
  /AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
      eget.
    </Typography>
  </AccordionDetails>
</Accordion>
*/
