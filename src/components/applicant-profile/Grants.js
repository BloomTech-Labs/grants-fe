import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";

const Grants = (grants) => {
  const classes = useStyles();

  // const applicant_id = useSelector(state => state.user.userId)

  // useEffect(() => {
  //   dispatch(getApplicantGrants(applicant_id));
  // }, [dispatch])  

  // const grants = useSelector((state) => state.profileInfo.grants)

  return (
    <>
      <h3>Grants We'd Like to Apply For:</h3>
      <Paper className={classes.profilepaper}>
        <h4>Insert grant name here</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          venenatis urna cursus. Gravida neque convallis a cras semper.
          Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
        </p>
        <h4>Insert grant name here</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          venenatis urna cursus. Gravida neque convallis a cras semper.
          Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
        </p>
        <h4>Insert grant name here</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
          venenatis urna cursus. Gravida neque convallis a cras semper.
          Habitasse platea dictumst quisque sagittis purus sit amet volutpat.
        </p>
        {/* {grants.map((grant) => {
          <div className={classes.profilegrantcard} key={grant.grant_id}>
            <h3>{grants.grant_name}</h3> 
            <p>{grants.grant_description}</p>
          </div>
        })} */}
      </Paper>
    </>
  );
};

export default Grants;
