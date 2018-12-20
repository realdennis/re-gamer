//API Pattern https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php?q=${word}&page=2
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchFormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    input,
    button {
      background: none;
      outline: none;
      border: none;
      background-color: rgb(255, 255, 255);
    }
    input {
      padding-left: 10px;
      height: 40px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    button {
      padding: 0;
      margin: 0;
      padding-right: 5px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      cursor: pointer;
    }
  }
`;
//const URL = 'https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php';
const submit = (e, history) => {
  e.preventDefault();
  let input = e.target.querySelector('input').value;
  history.push(`/search/board/${input}`);
};
const Search = ({ className, history }) => (
  <div className={className} id="Search">
    <SearchFormWrapper>
      <h2>搜尋看板...</h2>
      <form onSubmit={e => submit(e, history)}>
        <input type="text" />
        <button>
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    </SearchFormWrapper>
  </div>
);

export default Search;
