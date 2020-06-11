import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleEditing} from "../../store/actions/profileActions.js"
import {
  Button,
  Input
} from "@material-ui/core";
import { useStyles } from "./EditProfileForms.styles.js";

//  const writer = useSelector((state) => state.profileInfo.profileDetails);
//   const userId = useSelector((state) => state.login.userId);
//   const isEditing = useSelector((state) => state.profileInfo.isEditing);
//   const profileId = useSelector((state) => state.profileInfo.profileDetails.writer_id);
//   const viewerId = useSelector((state) => state.login.userId);
//   const dispatch = useDispatch();



export const EditButton = (props) => {
  const viewerId = props.viewerId;
  const profileId = props.profileId;
  const dispatch = useDispatch();

  const editToggle = () => {
    dispatch(toggleEditing());
  }

    if(Number(viewerId) === Number(profileId)) {
      return (
        <Button 
          onClick={editToggle}  
        >
          Edit Profile
        </Button>
      );
    };
};

export const EditWriterInfo = (props) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.editDiv}>
        <h3 className-={classes.editTitle}>
          Bio:
        </h3>      
        <Input
          className="bio-input" 
          type="text"
          multiline={true}
          autoFocus={true}
          value={props.bioValue}
          onChange={props.editHandleChange}
        />

        <h3 className={classes.editTtitle}>
          Name:
        </h3>
        <div className="name-edit">
          <Input
            className="first-name-input" 
            type="text"
            
          />
        </div>



        <Button
          type="submit"
          onClick={props.handleSubmit}
        >
          Save
        </Button>
      </div>
    </>
  )
}