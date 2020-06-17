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

const Grants = ({ applicantDetails }) => {
  const { applicant_id } = applicantDetails;
  const classes = useStyles();

  const viewerId = useSelector((state) => state.login.userId);

  const grants = useSelector(
    (state) => state.profileInfo.profileDetails.grants
  );

  return (
    <>
      <h3>Grants We'd Like to Apply For:</h3>
      <Paper className={classes.profilepaper}>
        {Number(viewerId) === Number(applicant_id) ? (
          <div>
            <Button
              component={Link}
              to="/GrantsList"
              variant="contained"
              color="primary"
            >
              Edit Grants
            </Button>
            <Button
              component={Link}
              to="/GrantsForm"
              variant="contained"
              color="primary"
            >
              Add New Grant
            </Button>
          </div>
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
