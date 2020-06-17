import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Loader from "../../loader/Loader.js";
import { useStyles } from "./GrantsList.styles";

export default function GrantsList() {
  const classes = useStyles();

  const grantsLoading = useSelector(state => state.grants.isLoading)
  const grants = useSelector(state => state.grants.applicantGrants);

  return (
    <div className={classes.container}>
      <Grid className={classes.grantslistheader}>
        <h2>Saved Grants</h2>
        <div>
          <Button
            component={Link}
            to="/GrantsForm"
            variant="contained"
            color="primary"
          >
            Add a grant
          </Button>
        </div>
      </Grid>
      <Paper>
        {grantsLoading === true ? (
          <Loader />
        ) : (
          grants.map(grant => {
            return (
              <div key={grant.id}>
                <h3>{grant.grant_name}</h3>
                <p>{grant.description}</p>
                <div>
                  <Link to={`/EditGrant/${grant.id}`}>
                    <Button>Edit</Button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </Paper>
    </div>
  );
}
