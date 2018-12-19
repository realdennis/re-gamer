import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
const CardList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  li {
    &:hover {
      opacity: 0.8;
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
const URL = 'https://api.gamer.com.tw/mobile_app/forum/v3/C.php';
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
      let json = await API(URL, {
        bsn: this.bsn,
        snA: this.snA,
        index: this.state.index
      });
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
          {this.state.result.map((card, k) => (
            <li key={k}>
              <div>
                <p>
                  {card.author} ({card.nickname})
                </p>
                <p
                  id="content"
                  dangerouslySetInnerHTML={{ __html: card.content_html }}
                />
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
