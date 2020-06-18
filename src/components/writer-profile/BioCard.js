import React from "react";
import {
  Paper,
  Grid
} from "@material-ui/core/";
import { useStyles } from "../applicant-profile/ApplicantProfile.styles";

const BioCard = ({ writerDetails }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid clasName={classes.biosection}>
        <h1>
          {writerDetails.first_name}{" "}{writerDetails.last_name}
        </h1>
      </Grid>
      <Paper className={classes.profilepaper}>
        <p>
          {writerDetails.bio}
        </p>
      </Paper>
    </div>
  );
};

export default BioCard;