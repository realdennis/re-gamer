import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HotBoard from './View/HotBoard';
import About from './View/About';
import Search from './View/Search';
import InBoard from './View/InBoard';
import InArticle from './View/InArticle';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Components/Header';

const Main = styled.main`
  overflow: auto;
  height: 100%;
  & > * {
    height: 100%;
  }
`;
const Footer = styled.footer`
  height: 40px;
  background-color: rgb(40, 40, 40);
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    li {
      font-size: 1.4em;
      & > a {
        /*For Router Link*/
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      width: 100%;
      display: flex;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className={this.props.className}>
          <Header />
          <Main>
            <Route path="" exact component={HotBoard} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/recent" name="最近瀏覽" component={About} />
            <Route path="/board/:bsn" component={InBoard} />
            <Route path="/article/:bsn/:snA" component={InArticle} />
          </Main>
          <Footer>
            <ul>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon="fire" />
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <FontAwesomeIcon icon="search" />
                </Link>
              </li>
              <li>
                <Link to="/recent">
                  <FontAwesomeIcon icon="clock" />
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <FontAwesomeIcon icon="info-circle" />
                </Link>
              </li>
            </ul>
          </Footer>
        </div>
      </Router>
    );
  }
}
export default styled(App)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0) !important;
  color: silver;
  text-align: center;
`;
