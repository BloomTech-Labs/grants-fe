import {
  GET_PROFILEINFO_START,
  GET_PROFILEINFO_SUCCESS,
  GET_PROFILEINFO_ERROR
} from '../actions/ApplicantActions';

const initialState = {
  grants: [
    {grant_id: 1, grant_name: 'grant 1'},
    {grant_id: 2, grant_name: 'grant 2'},
    {grant_id: 3, grant_name: 'grant 3'}
  ],
  applicantProfileDetails: {
    id: null,
    name: null,
    organization: null,
    sector: null,
    biography: null
  },
  isLoading: false
};

const applicantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILEINFO_START:
      return {
        ...state,
        isLoading: true
      };

    case GET_PROFILEINFO_SUCCESS:
      return {
        ...state,
        grants: action.payload.grants,
        applicantProfileDetails: action.payload.applicantProfileDetails,
        isLoading: false
      };

    case GET_PROFILEINFO_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};

export default applicantReducer;