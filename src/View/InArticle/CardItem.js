import React from 'react';
import CommentItem from './CommentItem';
import styled from 'styled-components';
const highLight = e => {
  e.currentTarget.querySelectorAll('*').forEach(dom => {
    dom.style.color = 'silver';
    dom.style.backgroundColor = 'black';
  });
};
const CardItem = ({ className, card, index }) => {
  return (
    <li className={className}>
      <div>
        {index === 0 && <p className="title">{card.title}</p>}
        <p className="author">
          {card.author} ({card.nickname})
        </p>
        <p className="time">{card.date}</p>
        {card.dreason && <p>{card.dreason}</p>}
        <p
          onClick={e => highLight(e)}
          className="content"
          dangerouslySetInnerHTML={{ __html: card.content_html }}
        />
        <div className="comments">
          <ul>
            {card.comment.map((comment, index) => (
              <CommentItem comment={comment} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default styled(CardItem)`
margin:10px 0 ;
  div.comments {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  }
`;
