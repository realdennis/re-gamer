import React, { Component } from 'react';
import LoadButton from '../../Components/LoadMore';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';
import BoardItem from './BoardItem';
import { connect } from 'react-redux';
const mapStateToProps = state => ({ favList: state.Fav.favList });

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
      this.setState({ loading: true });
      let json = await API(_API[this.props.APItype], query);
      //this.setState({ loading: false });
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
    } finally {
      this.setState({ loading: false });
    }
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
              json={this.state.board[index]}
              board={board}
              key={index}
              favList={this.props.favList}
            />
          ))}
        </CustomList>
        <LoadButton
          loading={this.state.loading}
          hasMore={this.state.hasMore}
          fire={this.APIFire.bind(this)}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  null
)(Board);
