import React from "react";
import { useStyles } from "./writerProfile.styles.js";

const WriterEducation = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h3 className={classes.userEducation}>
        Background:
        <div className={classes.educationText}>
          Education:<div className={classes.bodyText}>USC 2010-2014</div>
        </div>
      </h3>
    </div>
  )
};

export default WriterEducation;