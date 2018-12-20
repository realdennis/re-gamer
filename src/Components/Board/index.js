import React, { Component } from 'react';
import LoadButton from '../LoadButton';
import API from '../../Lib/API';
import CustomList from '../CustomList';
import BoardItem from './BoardItem';
const _API = {
  Hot: 'https://api.gamer.com.tw/mobile_app/forum/v1/hot_board.php',
  Search: 'https://api.gamer.com.tw/mobile_app/forum/v1/search_board.php'
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      board: [],
      page: 1,
      loading: false
    };
  }
  async APIFire() {
    try {
      let query = { page: this.page };
      if (this.props.keyword) query = { q: this.props.keyword, ...query };
      let json = await API(_API[this.props.APItype], query);
      this.page += 1;
      this.setState(prev => ({
        board: [...prev.board, ...json]
      }));
    } catch (e) {
      console.log('api error');
      console.log(e);
    }
  }
  FavClick(e, key) {
    e.preventDefault();
    e.target.style.color = 'gold';
    console.log(this.state.board[key]);
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div className="HotBoard">
        <CustomList>
          {this.state.board.map((board, index) => (
            <BoardItem
              board={board}
              FavClick={e => this.FavClick(e, index)}
              key={index}
            />
          ))}
        </CustomList>
        <LoadButton onClick={this.APIFire.bind(this)}>Load More</LoadButton>
      </div>
    );
  }
}
export default Board;
