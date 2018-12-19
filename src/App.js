import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import HotBoard from './View/HotBoard';
import About from './View/About';
import Search from './View/Search';
import InBoard from './View/InBoard';
import InArticle from './View/InArticle';
import styled from 'styled-components/macro';
const GamerApp = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  overflow: auto;
  height:100%;
  & > * {
    height:100%;
  }
  background-color: rgb(0, 0, 0);
  color: silver;
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
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;
class App extends Component {
  render() {
    return (
      <Router>
        <GamerApp>
          <Main>
            <Route path="" exact component={HotBoard} />
            <Route path="/about" component={About} />
            <Route path="/search" component={Search} />
            <Route path="/recent" component={About} />
            <Route path="/board/:bsn" component={InBoard} />
            <Route path="/article/:bsn/:snA" component={InArticle} />
          </Main>
          <Footer>
            <ul>
              <li>
                <Link to=""> 熱門看板</Link>
              </li>
              <li>
                <Link to="/search">搜尋</Link>
              </li>
              <li>
                <Link to="/recent">最近瀏覽</Link>
              </li>
              <li>
                <Link to="/about">關於</Link>
              </li>
            </ul>
          </Footer>
        </GamerApp>
      </Router>
    );
  }
}

export default App;
