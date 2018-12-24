import React from 'react';
import Board from './Board';
import About from './About';
import Search from './Search';
import InBoard from './InBoard';
import InArticle from './InArticle';
import { Route } from 'react-router-dom';
export default () => (
  <React.Fragment>
    <Route path="" exact render={() => <Board APItype="Hot" />} />
    <Route path="/search" exact component={Search} />
    <Route
      path="/search/board/:keyword"
      render={({ match }) => (
        <Board keyword={match.params.keyword} APItype="Search" />
      )}
    />
    <Route path="/about" component={About} />
    <Route path="/favorite" name="我的最愛" component={About} />
    <Route path="/board/:bsn" component={InBoard} />
    <Route path="/article/:bsn/:snA" component={InArticle} />
  </React.Fragment>
);
