const USER_SESSION_REQUEST = 'USER/SESSION_REQUEST';
const USER_SESSION_SUCCESS = 'USER/SESSION_SUCCESS';
const USER_SESSION_FAILURE = 'USER/SESSION_FAILURE';

function session(req) {
  return async (dispatch) => {
    dispatch({
      type: USER_SESSION_SUCCESS,
      user: {
        authenticated: true,
        username: 'Viper'
      }
    });
  };
}

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SESSION_SUCCESS:
      return {
        ...state,
        ...action.user
      };
    default:
      return state;
  }
};

const actionCreators = {
  session,
};

const actionTypes = {
  USER_SESSION_REQUEST,
  USER_SESSION_SUCCESS,
  USER_SESSION_FAILURE,
};

export {
  actionCreators,
  actionTypes,
};

export default reducer;
