import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./ApplicantProfile.styles";
import Grid from "@material-ui/core/Grid";
import {
  getApplicantInfo,
  updateApplicantProfile
} from "../../store/actions/profileActions.js";
import { useSelector } from "react-redux";
import { EditProfile } from "../editProfileForms/EditProfileForms.js";

const BioCard = ({ applicantDetails }) => {
  const isEditing = useSelector((state) => state.profileInfo.isEditing);
  const userType = useSelector((state) => state.login.usertype);
  const classes = useStyles();

  const [profile, setProfile] = useState({
    first_name: applicantDetails.first_name,
    last_name: applicantDetails.last_name,
    bio: applicantDetails.bio,
    org_name: applicantDetails.org_name,
    city: applicantDetails.city,
    state: applicantDetails.state,
    zip: applicantDetails.zip,
    country: applicantDetails.country,
    sector: applicantDetails.sector,
    founding_date: applicantDetails.founding_date,
    website: applicantDetails.website
  });

  const editHandleChange = (event) => {
    setProfile({
      ...profile,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchEvent(updateApplicantProfile(applicantDetails.applicant_id, profile));
    dispatchEvent(getApplicantInfo(applicantDetails.applicant_id));
  }

  return (
    <>
      {isEditing === true ? (
        <EditProfile
          profile={applicantDetails}
          editHandleChange={editHandleChange}
          handleSubmit={handleSubmit}
          userType={userType}
        />
      ): (
        <>  
          <Grid className={classes.biosection}>
            {applicantDetails.org_name === "" ? (
              <h1>
                {applicantDetails.first_name} {applicantDetails.last_name}{" "}
              </h1>
            ) : (
              <h1>{applicantDetails.org_name}</h1>
            )}
            <h2>Sector: {applicantDetails.sector}</h2>
          </Grid>
          <Paper className={classes.profilepaper}>
            <p>{applicantDetails.bio}</p>
          </Paper>
        </>
      )}
    </>
  );
};

export default BioCard;
