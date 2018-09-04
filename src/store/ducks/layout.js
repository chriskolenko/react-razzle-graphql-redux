const LAYOUT_SIDEBAR_TOGGLE = 'LAYOUT/SIDEBAR_TOGGLE';
const LAYOUT_SIDEBAR_HIDE = 'LAYOUT/SIDEBAR_HIDE';

const sidebarToggle = (req) => {
  return async (dispatch) => {
    dispatch({
      type: LAYOUT_SIDEBAR_TOGGLE,
    });
  };
}

const sidebarHide = (req) => {
  return async (dispatch) => {
    dispatch({
      type: LAYOUT_SIDEBAR_HIDE,
      sidebar: false,
    });
  };
}

const initialState = { sidebar: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LAYOUT_SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebar: !state.sidebar,
      };
    case LAYOUT_SIDEBAR_HIDE:
      return {
        ...state,
        sidebar: false,
      };
    default:
      return state;
  }
};

const actionCreators = {
  sidebarToggle,
  sidebarHide,
};

const actionTypes = {
  LAYOUT_SIDEBAR_TOGGLE,
  LAYOUT_SIDEBAR_HIDE,
};

export {
  actionCreators,
  actionTypes,
};

export default reducer;
