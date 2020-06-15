import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleEditing} from "../../store/actions/profileActions.js"
import {
  Button,
  Input
} from "@material-ui/core";
import { useStyles } from "./EditProfileForms.styles.js";

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
    }else {
      return null; 
    };
};

export const EditProfile = (props) => {
  const classes = useStyles();
  const userType = props.userType;

  // const handleChange = (event) => {
  //   props.setProfile({
  //     ...props.profile,
  //     [event.target.name]: event.target.value
  //   });
  // };

  // const handleSumbit = event => {

  // }

  if (userType === "writer") {
    return (
      <>
      <div className={classes.editDiv}>
        
        <div className="name-edit">
          <h3 className={classes.editTitle}>
            Name:
          </h3>
          <Input
            className="first-name-input" 
            name="first_name"
            type="text"
            autoFocus={true}
            value={props.profile.first_name}
            onChange={props.editHandleChange}
          />
          <Input
            className="last-name-input" 
            name="last_name"
            type="text"
            value={props.profile.last_name}
            onChange={props.editHandleChange}
          />
        </div>
        <div className={classes.location}>
          <h3 className={classes.editTitle}>
            Location:
          </h3>
          <label>
            City: {" "}
            <Input
              className="edit-profile-input"
              name="city"
              type="text"
              value={props.profile.city}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            State: {" "}   
            <Input
              className="edit-profile-input"
              name="state"
              type="text"
              value={props.profile.state}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Zip: {" "}
            <Input
              className="edit-profile-input"
              name="zip"
              type="text"
              value={props.profile.zip}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Country: {" "}
            <Input
              className="edit-profile-input"
              name="country"
              type="text"
              value={props.profile.country}
              onChange={props.editHandleChange}
            />
          </label>
        </div>

        <div className={classes.moreInfo}>
          <h3 className={classes.editTitle}>
            More About Me:
          </h3>
          <label>
            Bio: {" "}  
            <Input
              className="edit-profile-input"
              name="bio" 
              type="text"
              multiline={true}
              fullWidth={true}
              value={props.profile.bio}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Sector: {" "}
            <Input 
              className="edit-profile-input"
              name="sector"
              type="text"
              value={props.profile.sector}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Website: {" "}
            <Input 
              className="edit-profile-input"
              name="website"
              type="text"
              value={props.profile.website}
              onChange={props.editHandleChange}
            />  
          </label>      
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
      
  } else {
    return (
      <>
        <div className={classes.editDiv}>
          <div className="name-edit">
            <h3 className={classes.editTitle}>
              Name:
            </h3>
            <Input
              className="first-name-input"
              name="first_name"
              type="text"
              autoFocus={true}
              value={props.profile.first_name}
              onChange={props.editHandleChange}
            />
            <Input
              className="last-name-input"
              name="last_name"
              type="text"
              value={props.profile.last_name}
              onChange={props.editHandleChange}
            />
          </div>
          <div className={classes.location}>
            <h3 className={classes.editTitle}>
              Location:
            </h3>
            <label>
              City: {" "}
              <Input
                className="edit-profile-input"
                name="city"
                type="text"
                value={props.profile.city}
                onChange={props.editHandleChange}
              />
            </label>
            <label>
            State: {" "}   
            <Input
              className="edit-profile-input"
              name="state"
              type="text"
              value={props.profile.state}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Zip: {" "}
            <Input
              className="edit-profile-input"
              name="zip"
              type="text"
              value={props.profile.zip}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Country: {" "}
            <Input
              className="edit-profile-input"
              name="country"
              type="text"
              value={props.profile.country}
              onChange={props.editHandleChange}
            />
          </label>
        </div>

        <div className={classes.moreInfo}>
          <h3 className={classes.editTitle}>
            More About Me:
          </h3>
          <label>
            Bio: {" "}  
            <Input
              className="edit-profile-input"
              name="bio" 
              type="text"
              multiline={true}
              fullWidth={true}
              value={props.profile.bio}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Sector: {" "}
            <Input 
              className="edit-profile-input"
              name="sector"
              type="text"
              value={props.profile.sector}
              onChange={props.editHandleChange}
            />
          </label>
          <label>
            Website: {" "}
            <Input 
              className="edit-profile-input"
              name="website"
              type="text"
              value={props.profile.website}
              onChange={props.editHandleChange}
            />  
          </label>      
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
  //if userType = writer return thing else return other thing...
  
};

//I want to refactor the above so that it renders differently based on the user type, accepting a prop in the component that tell it which user type the profile is. That way we can avoid repeating code for a few table differences. 