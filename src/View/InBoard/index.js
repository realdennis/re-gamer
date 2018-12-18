import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
const ArticleList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  li {
    &:hover {
      opacity: 0.8;
      background-color: rgb(240, 240, 240);
    }
    cursor: pointer;
    user-select: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    a {
      display: flex;
    }
    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
      border-radius: 100%;
      margin-right: 10px;
    }
    p {
      text-overflow: ellipsis;
    }
  }
`;
const LoadButton = styled.button`
  outline: none;
  background: none;
  border-color: pink;
  border-width: 2px;
  padding: 10px;
  &:active {
    border-style: solid;
    background-color: gray;
  }
`;
const API = 'https://api.gamer.com.tw/mobile_app/forum/v1/B.php';
const fetchAPI = async (bsn, page) => {
  const target = `${API}?bsn=${bsn}&page=${page}`;
  let res = await fetch(target);
  let json = await res.json();
  return json;
};
class InBoard extends Component {
  constructor(props) {
    super(props);
    this.name = this.props.location.name;
    this.bsn = this.props.match.params.bsn;
    this.state = {
      result: [],
      page: 1
    };
  }
  async APIFire() {
    try {
      let json = await fetchAPI(this.bsn, this.state.page);
      this.setState(prev => ({
        result: [...prev.result, ...json.list],
        page: (prev.page += 1)
      }));
    } catch (e) {
      console.log('InBoard api error');
      console.log(e);
    }
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div>
        <h1>{this.name}</h1>
        <ArticleList>
          {this.state.result.map((article, key) => (
            <li key={key}>
              <Link
                to={{
                  pathname: `/article/${this.bsn}/${article.snA}`,
                  name: article.title
                }}
              >
                {/* 
                <img src={article.thumbnail} alt="" />*/}
                <p>{article.title}</p>
              </Link>
            </li>
          ))}
        </ArticleList>
        <LoadButton onClick={() => this.APIFire()}>Load More</LoadButton>
      </div>
    );
  }
}
export default InBoard;
