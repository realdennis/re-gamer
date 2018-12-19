import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }
  backButton() {
    window.history.back();
  }
  componentDidUpdate() {}
  render() {
    return (
      <header className={this.props.className}>
        {this.props.location.pathname === '/' ? (
          undefined
        ) : (
          <div className="back-button" onClick={this.backButton}>
            <FontAwesomeIcon icon="chevron-left" />
          </div>
        )}

        <p>{this.props.location.name}</p>
      </header>
    );
  }
}
export default withRouter(styled(Header)`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: rgb(30, 30, 30);
  div.back-button {
    min-width: 60px;
    width: 60px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.4em;
  }
  p {
    padding: 0;
    margin: 0;
    text-align: left;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }
`);
