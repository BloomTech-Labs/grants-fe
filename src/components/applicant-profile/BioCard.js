import React from "react";
import { useStyles } from "./ApplicantProfile.styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const BioCard = ({ applicantDetails }) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.biosection}>
        <h1>{/*applicantDetails.org_name*/}Org Name</h1>
        <h2>Sector: {/*applicantDetails.sector*/}sector</h2>
      </Grid>
      <Paper className={classes.profilepaper}>
        <p>
          {/*applicantDetails.bio*/}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          venenatis urna cursus. Gravida neque convallis a cras semper.
          Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
          Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
          Porttitor eget dolor morbi non arcu risus quis varius. Lectus proin
          nibh nisl condimentum id venenatis a condimentum vitae. At tellus at
          urna condimentum mattis. Vitae suscipit tellus mauris a diam maecenas.
          Donec massa sapien faucibus et molestie ac.
        </p>
      </Paper>
    </>
  );
};

export default BioCard;
