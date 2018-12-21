import React, { Component } from 'react';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';
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
      loading: false,
      hasMore: true
    };
  }
  async APIFire() {
    if (!this.state.hasMore) return;
    try {
      let query = { page: this.page };
      if (this.props.keyword) query = { q: this.props.keyword, ...query };
      //If Route from search form
      let json = await API(_API[this.props.APItype], query);
      if (json.length === 0) {
        this.setState({ hasMore: false });
        return;
      }
      if (
        this.state.board.length !== 0 &&
        this.state.board[this.state.board.length - 1].bsn ===
          json[json.length - 1].bsn
      ) {
        this.setState({ hasMore: false });
        return;
      }

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
        {this.state.hasMore ? (
          <LoadButton onClick={this.APIFire.bind(this)}>Load More</LoadButton>
        ) : (
          <p>已經到底了!</p>
        )}
      </div>
    );
  }
}
export default Board;
