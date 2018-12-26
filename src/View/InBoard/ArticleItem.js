import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const numToColor = num => {
  if(num>999) return 'fuchsia';
  if(num>99) return 'red';
  if(num>9 ) return 'yellow';
  return 'lime'
}
const ArticleItem = ({ className, article }) => {
  return (
    <li className={className}>
      <Link
        to={{
          pathname: `/article/${article.bsn}/${article.snA}`,
          name: article.title
        }}
      >
        <p className="gp" style={{color:numToColor(article.gp)}}>{article.gp}</p>
        <p className="title">{article.title}</p>
      </Link>
    </li>
  );
};
export default styled(ArticleItem)`
  p.gp {
    width: 10%;
    min-width: 40px;
    flex-shrink: 0;
    text-align: center;
  }
`;
