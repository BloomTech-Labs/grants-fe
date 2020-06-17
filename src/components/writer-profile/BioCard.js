import React from "react";
import {
  Paper,
  Grid
} from "@material-ui/core/";
import { useStyles } from "./writerProfile.styles";

const BioCard = ({ writerDetails }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid>
        <h1>
          {writerDetails.first_name}{" "}{writerDetails.last_name}
        </h1>
      </Grid>
      <Paper>
        <p>
          {writerDetails.bio}
        </p>
      </Paper>
    </div>
  );
};

export default BioCard;