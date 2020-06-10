import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StylesProvider, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./writerProfile.styles.js";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";

import { 
  Typography, 
  Button,
  Tabs,
  Tab,
  Link,
  Box,
  Input 
} from '@material-ui/core';

import { getApplicantInfo, toggleEditing, setEditing } from "../../store/actions/profileActions.js";
import Loader from "../loader/Loader.js";

const GlobalCSS = withStyles({
  "@global": {
    ".MuiPaper-elevation2": {
      width: "80%",
      height: "auto",
      marginTop: "5%",
      marginBottom: "5%",
      marginLeft: "10%",
    },
  },
})(() => null);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const WriterProfile = (props) => {
  const classes = useStyles();

  //Redux
  const writer = useSelector((state) => state.profileInfo.profileDetails);
  const userId = useSelector((state) => state.login.userId);
  const isEditing = useSelector((state) => state.profileInfo.isEditing)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApplicantInfo(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  //

  const preventDefault = (event) => event.preventDefault();

  const [value, setValue] = React.useState(0);

  const [bioValue, setBioValue] = React.useState(writer.bio);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const editHandleChange = (event, newValue) => {
    setBioValue(newValue)
  };

  function editToggle() {
    dispatch(toggleEditing())
    //use this for the handleSumbit for sumbitting editing on profile data
  }

  function sumbitHandler() {
    //for submitting profile updates.
  }


  return (
    <StylesProvider>
      <GlobalCSS />
      {writer ? (
      <Paper classes={{ root: classes.rootPaper }} elevation={3}>
        {" "}
        <div>
          <AccountCircleIcon
            classes={{ root: classes.rootIcon }}
            fontSize="large"
          />
          {writer && (
            <div className={classes.userName}>
              {" "}
              {writer.first_name}
              {" "}
              {writer.last_name}
            </div>
          )}
          <Button
            classes={{ root: classes.rootButton, label: classes.labelButton }}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Direct Message
          </Button>
          {writer && (
            <>
            <Link
              classes={{ root: classes.rootLink }}
              href={writer.website}
              onClick={preventDefault}
            >
              {writer.website}
            </Link>

            <Button 
              onClick={editToggle}  
            >
              Edit Profile
            </Button>

            <Button 
              onClick={editToggle}
            >
              Done
            </Button>
            
            {isEditing===false ? (
              <div>Not Editing</div>
            ): (
              <div>Is Editing</div>
            )}
            
            </>
          )}
        </div>
        {writer && (
          <>
            {isEditing===true ? (
              <>
              <div>
                <h3 classname={classes.userEducation}>
                  Bio:
                </h3>
                <Input 
                  type="text"
                  value={bioValue}
                  onChange={editHandleChange}
                ></Input>
                <Button type="submit">
                  Sumbit
                </Button>
              </div>
              </>
            ): (

              <h3 className={classes.userEducation}>
                Bio:
                <div className={classes.bodyText}>{writer.bio}</div>
              </h3>
            )
            }
          </>
        )}
        <div></div>
        <h3 className={classes.userEducation}>
          Background:
          <div className={classes.educationText}>
            Education:<div className={classes.bodyText}>USC 2010-2014</div>
          </div>
          <div className={classes.educationText}>
            Work History:
            <div className={classes.bodyText}>DSC 2010-2014</div>
          </div>
        </h3>
        <div></div>
        <div className={classes.userServices}>
          <h3 className={classes.userEducation}>Services Offered:</h3>
          <Paper>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={value}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              className={classes.tabs}
            >
              <Tab label="Grant Writing" {...a11yProps(0)} />
              <Tab label="Grant Research" {...a11yProps(1)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </TabPanel>
            <TabPanel value={value} index={1}>
              This is just here to show you this works.
            </TabPanel>
          </Paper>
        </div>
        <h3 className={classes.finalGrid}>
          Portfolio:
          <Paper elevation={2}>text here</Paper>
          <Paper elevation={2}>text here</Paper>
          <Paper elevation={2}>text here</Paper>
        </h3>
      </Paper>
      ) : (
        <Loader />
      )}
    </StylesProvider>
  );
};

export default WriterProfile;
