import React, { Component } from 'react';
import API from '../../Lib/API';
//API Pattern https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php?q=${word}&page=2
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomList from '../../Components/CustomList';
import { Link } from 'react-router-dom';
import LoadButton from '../../Components/LoadButton';
const SearchList = styled(CustomList)``;
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
const URL = 'https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php';

//Keyword page
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      keyword: '',
      page: 1,
      result: []
    };
  }
  async APIFire() {
    try {
      let json = await API(URL, {
        q: this.state.keyword,
        page: this.state.page
      });
      this.setState(prev => ({
        result: [...prev.result, ...json],
        page: (prev.page += 1),
        isSubmit: true
      }));
    } catch (e) {
      console.log('search api error');
      console.log(e);
    }
  }
  reset() {
    this.setState({ isSubmit: false, keyword: '', page: 1, result: [] });
  }
  search(e) {
    e.preventDefault();
    let input = e.target.querySelector('input').value;
    //console.log(input);
    this.setState({ keyword: input }, this.APIFire);
  }
  render() {
    return (
      <div className={this.props.className} id="Search">
        {this.state.isSubmit ? (
          <div>
            <h2>Now search... {this.state.keyword}</h2>
            <SearchList>
              {this.state.result.map((result, key) => (
                <li key={key}>
                  <Link
                    to={{
                      pathname: `/board/${result.bsn}`,
                      name: result.title
                    }}
                  >
                    <img src={result.board_image} alt="" />
                    <p>{result.title}</p>
                  </Link>
                </li>
              ))}
              <LoadButton onClick={() => this.APIFire()}>Load More</LoadButton>
            </SearchList>
          </div>
        ) : (
          <SearchFormWrapper>
            <h2>搜尋看板...</h2>
            <form onSubmit={e => this.search(e)}>
              <input type="text" />
              <button>
                <FontAwesomeIcon icon="search" />
              </button>
            </form>
          </SearchFormWrapper>
        )}
      </div>
    );
  }
}
export default Search;
