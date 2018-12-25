import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { SetTitle, addFav, rmFav } from '../../Store/Action';
//const mapStateToProps = state => ({ favList: state.Fav.favList });
const mapDispatchToProps = dispatch => ({
  add: board => dispatch(addFav(board)),
  remove: board => dispatch(rmFav(board)),
  setTitle: t => dispatch(SetTitle(t))
});
const FavClick = (e, add, remove, json, isFav, setFav) => {
  e.stopPropagation();
  e.preventDefault();
  isFav ? remove(json) : add(json);
  setFav((isFav = !isFav));
};
const BoardItem = ({
  className,
  board,
  json,
  add,
  remove,
  favList,
  setTitle
}) => {
  let [isFav, setFav] = useState(false);

  useEffect(() => setFav((isFav = favList.some(b => b.bsn === board.bsn))));
  //console.log(board.bsn);
  return (
    <li className={className}>
      <Link
        onClick={() => setTitle(board.title)}
        to={{ pathname: `/board/${board.bsn}`, name: board.title }}
      >
        <img src={board.board_image} alt="" />
        <p className="board-title">{board.title}</p>
        <div
          onClick={e => FavClick(e, add, remove, json, isFav, setFav)}
          className="board-fav-btn"
          style={isFav ? { color: 'gold' } : undefined}
        >
          <FontAwesomeIcon icon="star" />
        </div>
      </Link>
    </li>
  );
};
export default connect(
  null,
  mapDispatchToProps
)(styled(BoardItem)`
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
`);
