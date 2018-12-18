import React, { Component } from 'react';
//API Pattern https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php?q=${word}&page=2
import styled from 'styled-components/macro';
const SearchFormWrapper = styled.div`
  form {
    width: 100%;
  }
`;
const SearchViewWrapper = styled.div``;
const API = 'https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php';
const fetchAPI = async (keyword, page) => {
  const target = `${API}?q=${keyword}&page=${page}`;
  let res = await fetch(target);
  let json = await res.json();
  return json;
};
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
      let json = await fetchAPI(this.state.keyword, this.state.page);
      this.setState(prev => ({
        result: [...prev.result, ...json],
        page: (prev.page += 1)
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
    this.setState({ isSubmit: true, keyword: input });
  }
  render() {
    return (
      <div id="Search">
        <h1>搜尋</h1>
        {this.state.isSubmit ? (
          <SearchViewWrapper>
            <h2>Now search... {this.state.keyword}</h2>
            <button onClick={() => this.reset()}>Back</button>
          </SearchViewWrapper>
        ) : (
          <SearchFormWrapper>
            <form onSubmit={e => this.search(e)}>
              <input type="text" />
              <button>搜尋</button>
            </form>
          </SearchFormWrapper>
        )}
      </div>
    );
  }
}
export default Search;
