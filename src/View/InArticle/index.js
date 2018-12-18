import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
const CardList = styled.ul`
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
const API = 'https://api.gamer.com.tw/mobile_app/forum/v3/C.php';
const fetchAPI = async (bsn, snA, index) => {
  const target = `${API}?bsn=${bsn}&snA=${snA}&index=${index}`;
  console.log(target);
  let res = await fetch(target);
  let json = await res.json();
  //console.log(json);
  return json;
};
class InBoard extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props);
    this.name = this.props.location.name;
    this.bsn = this.props.match.params.bsn;
    this.snA = this.props.match.params.snA;
    this.state = {
      result: [],
      index: 1
    };
  }
  async APIFire() {
    try {
      let json = await fetchAPI(this.bsn, this.snA, this.state.index);
      this.setState(prev => ({
        result: [...prev.result, ...json.list],
        index: (prev.index += 20)
      }));
    } catch (e) {
      console.log('InArticle api error');
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
        <CardList>
          {this.state.result.map((card,k) => (
            <li key={k}>
              <div>
                <p>{card.author} ({card.nickname})</p>
                <p id="content" dangerouslySetInnerHTML={{__html:card.content_html}} />
              </div>
            </li>
          ))}
        </CardList>
        <LoadButton onClick={() => this.APIFire()}>Load More</LoadButton>
      </div>
    );
  }
}
export default InBoard;
