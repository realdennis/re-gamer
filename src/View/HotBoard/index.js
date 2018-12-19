import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
const BoardList = styled.ul`
  list-style: none;
  text-align: left;
  padding: 0;
  li {
    &:hover {
      opacity: 0.8;
      background-color: rgb(20, 20, 120);
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

class HotBoard extends Component {
  constructor(props) {
    super(props);
    this.api = 'https://api.gamer.com.tw/mobile_app/forum/v1/hot_board.php';
    this.state = {
      board: [],
      page: 1,
      loading: false
    };
  }

  async APIFire() {
    try {
      let json = await API(this.api, { page: this.state.page });
      this.setState(prev => ({
        board: [...prev.board, ...json],
        page: (prev.page += 1)
      }));
    } catch (e) {
      console.log('api error');
      console.log(e);
    }
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div className="HotBoard">
        <h1>熱門看板</h1>
        <BoardList>
          {this.state.board.map((b, key) => (
            <li key={key}>
              <Link to={{ pathname: `/board/${b.bsn}`, name: b.title }}>
                <img src={b.board_image} alt="" />
                <p>{b.title}</p>
              </Link>
            </li>
          ))}
        </BoardList>
        <LoadButton onClick={this.APIFire.bind(this)}>Load More</LoadButton>
      </div>
    );
  }
}
export default HotBoard;
