import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BioCard from "./BioCard";
import Grants from "./Grants";
import LeftPanel from "./LeftPanel";

import { useStyles } from "./ApplicantProfile.styles";

import { getProfileInfo } from "../../store/actions/ApplicantActions.js";

export default function ApplicantProfile() {
  const classes = useStyles();

  //Redux
  //setting state
  const userId = useSelector((state) => state.login.userId);

  //implementing actions
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileInfo(userId));
  }, []);

  return (
    <div className={classes.root}>
      <Grid className={classes.profile}>
        <div className={classes.leftpanel}>
          <LeftPanel />
        </div>
        <div>
          <BioCard />
        </div>
      </Grid>
      <Grid className={classes.grants}>
        <div>
          <Grants />
        </div>
      </Grid>
    </div>
  );
}
