import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapSetTitle from '../../Lib/MapSetTitle';

class About extends Component {
  componentDidMount() {
    this.props.setTitle('About');
  }
  render() {
    return <React.Fragment/>;
  }
}
export default connect(
  null,
  mapSetTitle
)(About);
