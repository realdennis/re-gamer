import React, { Component } from 'react';
import CustomList from '../../Components/CustomList';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
//import styled from 'styled-components';
import ArticleItem from './ArticleItem';
//const ArticleList = CustomList;

const URL = 'https://api.gamer.com.tw/mobile_app/forum/v1/B.php';

class InBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      page: 1,
      hasMore: true,
      boardName: ''
    };
  }
  async APIFire() {
    if (!this.state.hasMore) return;
    try {
      let json = await API(URL, {
        bsn: this.props.match.params.bsn,
        page: this.state.page
      });
      if (this.state.boardName === '') {
        this.setState({ boardName: json.otherInfo.boardName });
      }
      if (json.list.length === 0) {
        this.setState({ hasMore: false });
        return;
      }
      if (
        this.state.result.length !== 0 &&
        this.state.result[this.state.result.length - 1].snA ===
          json.list[json.list.length - 1].snA
      ) {
        this.setState({ hasMore: false });
        return;
      }
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
        {/*this.state.boardName&&<h1 className="board-name">{this.state.boardName}</h1>*/}
        <CustomList>
          {this.state.result.map((article, index) => (
            <ArticleItem article={article} key={index} index={index} />
          ))}
        </CustomList>
        {this.state.hasMore ? (
          <LoadButton onClick={() => this.APIFire()}>Load More</LoadButton>
        ) : (
          <p>到底了</p>
        )}
      </div>
    );
  }
}
export default InBoard;
/* styled(InBoard)`
.board-name{
  padding:5px;
  position:sticky;
  top:0;
  z-index:2;
  margin:0;
  background-color:navy;
  color:gold;
}
`;*/
