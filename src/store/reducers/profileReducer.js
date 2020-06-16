import {
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  TOGGLE_EDITING,
  PUT_PROFILE_START,
  PUT_PROFILE_SUCCESS,
  PUT_PROFILE_FAILURE
} from "../actions/profileActions";

import {
  PUT_GRANTS_START,
  PUT_GRANTS_SUCCESS,
  PUT_GRANTS_FAILURE,
  DELETE_GRANTS_START,
  DELETE_GRANTS_SUCCESS,
  DELETE_GRANTS_FAILURE   
} from "../actions/grantsActions"

const initialState = {
  profileDetails: {},
  isLoading: false,
  isEditing: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profileDetails: action.payload,
          isLoading: false,
      };

    case GET_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
          isLoading: false,
      };

    case TOGGLE_EDITING:
      return {
        ...state,
        isEditing: !state.isEditing
      };

    case PUT_PROFILE_START:
      return {
        ...state,
        isLoading: true,
        isEditing: true
      };
      
     case PUT_PROFILE_SUCCESS:
       return {
         ...state,
         profile: action.payload,
         isLoading: false,
         isEditing: false
       }; 

    case PUT_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
        isEditing: false
      }
    case PUT_GRANTS_START:
    return {
      ...state,
      isLoading: true,
    };

  case PUT_GRANTS_SUCCESS:
    return {
      ...state,
      isLoading: false,
    };

  case PUT_GRANTS_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };
  
  case DELETE_GRANTS_START:
    return {
      ...state,
      isLoading: true,
    };

  case DELETE_GRANTS_SUCCESS:
    return {
      ...state,
      profileDetails: {
        ...state.profileDetails, 
        grants: state.grants.filter((grant) => grant.id !== action.payload)
      },
      isLoading: false,
    };

  case DELETE_GRANTS_FAILURE:
    return {
      ...state,
      error: action.payload,
      isLoading: false,
    };

    default:
      return state;
  }

  
};

export default profileReducer;