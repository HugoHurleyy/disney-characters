import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CharacterAccordion = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {props.infos.length > 0 ? (
          props.infos.map((info) => <Typography>{info}</Typography>)
        ) : (
          <Typography>{props.notFound}</Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default CharacterAccordion;
