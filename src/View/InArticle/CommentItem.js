import React from 'react';
import styled from 'styled-components';
const CommentItem = ({ className, comment }) => (
  <li className={className} id="comment">
    <p className="nick">{comment.nick}</p>
    <p>:</p>
    <p className="content">{comment.content}</p>
  </li>
);
export default styled(CommentItem)`
  border-bottom:1px solid gray;
  &#comment {
    opacity: 1;
  }
  li {
    display: flex;
  }
  p{
    margin:0;
    padding:0;
  }
  p.nick {
    flex-shrink: 0;
    min-width: 70px;
    width:15%;
    color: #ff0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p.content {
    width: 100%;    color: olive;
  }
  display: flex;
  width: 100%;
`;
