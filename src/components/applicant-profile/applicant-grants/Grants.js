import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGrants,
  getGrantsByApplicantId,
} from "../../../store/actions/grantsActions";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader.js";

import Paper from "@material-ui/core/Paper";
import { useStyles } from "../ApplicantProfile.styles";
import Button from "@material-ui/core/Button";

const Grants = (/*grants*/) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const profileId = useSelector(
    (state) => state.profileInfo.profileDetails.applicant_id
  );

  const viewerId = useSelector((state) => state.login.userId);

  const grants = useSelector((state) => state.grants.grants);

  const grantProfile = useSelector(
    (state) => state.profileInfo.profileDetails.id
  );

  useEffect(() => {
    dispatch(getGrants());
  }, [dispatch]);

  return (
    <>
      <h3>Grants We'd Like to Apply For:</h3>
      <Paper className={classes.profilepaper}>
        {Number(viewerId) === Number(profileId) ? (
          <Button component={Link} to="/GrantsList">
            Edit Grants
          </Button>
        ) : (
          <div> </div>
        )}
        {!grants || grants.length < 1 ? (
          <Loader />
        ) : (
          grants.map((grant) => {
            return (
              <div className={classes.profilegrantcard} key={grant.id}>
                <h4>{grant.grant_name}</h4>
                <p>{grant.description}</p>
              </div>
            );
          })
        )}
      </Paper>
    </>
  );
};

export default Grants;
