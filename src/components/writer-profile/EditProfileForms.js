import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleEditing} from "../../store/actions/profileActions.js"
import {
  Button,
  Input
} from "@material-ui/core";

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