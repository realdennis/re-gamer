import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';

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
        <CustomList>
          {this.state.board.map((b, key) => (
            <li key={key}>
              <Link to={{ pathname: `/board/${b.bsn}`, name: b.title }}>
                <img src={b.board_image} alt="" />
                <p>{b.title}</p>
              </Link>
            </li>
          ))}
        </CustomList>
        <LoadButton onClick={this.APIFire.bind(this)}>Load More</LoadButton>
      </div>
    );
  }
}
export default HotBoard;
