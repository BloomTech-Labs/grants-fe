import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

import GrantCard from "./grantCards/GrantCard.jsx";

import { useStyles } from "./GrantsPageStyles.jsx";

import Loader from "../loader/Loader.js";

const GrantsPage = () => {
  //======Access necessary actions for GrantsPage======
  const dispatch = useDispatch(); //can use all actions.
  //=====================

  //======Access state from reducer for GrantsPage======
  const grants = useSelector((state) => {
    console.log("state.grants: ", state.grants);
    return state.grants.grants;
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container className={classes.appHeader}>
        {!grants || grants.length < 1 ? (
          //<h4>Loading....</h4>
          <Loader />
        ) : (
          grants.map((grant) => {
            return (
              <div className="Card-display" key={grant.id}>
                <br />
                <GrantCard data={grant} />
              </div>
            );
          })
        )}
      </Container>
    </div>
  );
};

export default GrantsPage;
