import React from 'react';
import { Link } from 'react-router-dom';
const ArticleItem = ({ article }) => (
  <li className="article-title" >
    <Link
      to={{
        pathname: `/article/${article.bsn}/${article.snA}`,
        name: article.title
      }}
    >
      <p>{article.title}</p>
    </Link>
  </li>
);
export default ArticleItem;
