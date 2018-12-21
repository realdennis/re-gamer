import React, { Component } from 'react';
import { connect } from 'react-redux';
//action
import { set_title } from '../../Store/Action';

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  ChangeTitle: t => dispatch(set_title(t))
});
class About extends Component {
  componentDidMount() {
    this.props.ChangeTitle('About');
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
export default connect(
  null,
  mapDispatchToProps
)(About);
