import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const BoardList = styled(CustomList)`
  p.board-title {
    width: 100%;
  }
  div.board-fav-btn {
    width: 50px;
    height:50px;
    *{
      height:inherit;
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
  FavClick(e,key) {
    e.preventDefault();
    e.target.style.color = 'gold';
    console.log(this.state.board[key])
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div className="HotBoard">
        <BoardList>
          {this.state.board.map((b, key) => (
            <li key={key}>
              <Link to={{ pathname: `/board/${b.bsn}`, name: b.title }}>
                <img src={b.board_image} alt="" />
                <p className="board-title">{b.title}</p>
                <div onClick={e => this.FavClick(e,key)} className="board-fav-btn">
                  <FontAwesomeIcon icon="star" />
                </div>
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
