import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BoardItem = ({ className, FavClick, board }) => (
  <li className={className}>
    <Link to={{ pathname: `/board/${board.bsn}`, name: board.title }}>
      <img src={board.board_image} alt="" />
      <p className="board-title">{board.title}</p>
      <div onClick={e => FavClick(e)} className="board-fav-btn">
        <FontAwesomeIcon icon="star" />
      </div>
    </Link>
  </li>
);
export default styled(BoardItem)`
  img {
    width: 50px;
    height: 50px;
  }
  p.board-title {
    width: 100%;
  }
  div.board-fav-btn {
    width: 50px;
    height: 50px;
    * {
      height: inherit;
    }
  }
`;
