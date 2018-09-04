import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/ducks/user';

const mapStateToProps = (state) => ({
  isReady: state.isReady,
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

class Init extends React.Component {
  componentDidMount() {
    this.props.session()
  }

  render() {
    return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Init);
