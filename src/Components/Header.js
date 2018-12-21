import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
const backButton = () => window.history.back();
const mapStateToProps = state => ({
  title: state.titleName
});
const Header = props => (
  <header className={props.className}>
    {props.location.pathname.split('/').length > 2 && (
      <div className="back-button" onClick={backButton}>
        <FontAwesomeIcon icon="chevron-left" />
      </div>
    )}
    <h1 className="App-name">{props.title}</h1>
  </header>
);

export default connect(
  mapStateToProps,
  null
)(
  withRouter(styled(Header)`
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
  `)
);
