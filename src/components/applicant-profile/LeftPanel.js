import React, { useEffect } from "react";

import { useSelector, useDispatch} from 'react-redux'
import { getProfileInfo} from '../../store/actions/ApplicantActions'

import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: "0 auto",
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function LeftPanel() {
  const dispatch = useDispatch();
  const applicant_id = useSelector(state => state.login.user.UserId)
  const applicantDetails = useSelector(state => state.applicantProfileDetails)
  const classes = useStyles();

  useEffect(() => {
    dispatch(getProfileInfo(applicant_id));
  }, [dispatch])

  return (
    <>
      <div className={classes.leftpanel}>
        <div>
          <AccountCircleIcon className={classes.large} />
        </div>
        <div>
          <Button variant="contained" color="primary" href="#">
            Direct Message
          </Button>
        </div>
        <div>Visit Our website:</div>
        <a href="#">{/* {applicantDetails.website_url} */} www.writemygrants.net</a>
      </div>
    </>
  );
}
