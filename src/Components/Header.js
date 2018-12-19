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
    console.log(this.props.location.pathname.split('/'));
  }
  backButton() {
    window.history.back();
  }
  componentDidUpdate() {}
  render() {
    return (
      <header className={this.props.className}>
        {this.props.location.pathname.split('/').length > 2 ? (
          <div className="back-button" onClick={this.backButton}>
            <FontAwesomeIcon icon="chevron-left" />
          </div>
        ) : (
          undefined
        )}

        {/*  <p>{this.props.location.name}</p>*/}
        <h1 className="App-name">巴哈閱讀器</h1>
      </header>
    );
  }
}
export default withRouter(styled(Header)`
  -webkit-app-region: drag;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(30, 30, 30);
  div.back-button {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.4em;
  }
  .App-name {
    font-size: 18px;
    padding: 0;
    margin: 0;
    justify-content: center;
    height: inherit;
    width: 100%;
    display: flex;
    align-items: center;
  }
`);
