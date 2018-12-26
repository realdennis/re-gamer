import React, { Component } from 'react';
import LoadButton from '../../Components/LoadMore';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';
import styled from 'styled-components';
import CardItem from './CardItem';
const URL = 'https://api.gamer.com.tw/mobile_app/forum/v3/C.php';
const CardList = styled(CustomList)`
  li {
    border: none;
    &:hover {
      background-color: black;
      opacity: 1;
    }
    img {
      max-width: 100%;
    }
    p.title,
    p.author,
    p.time {
      background-color: navy;
      margin: 0;
    }
    p.content {
      overflow: auto;
    }
  }
`;
class InArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      index: 1,
      loading: false,
      hasMore: true
    };
  }
  async APIFire() {
    if (!this.state.hasMore) return;
    try {
      this.setState({ loading: true });
      let json = await API(URL, {
        bsn: this.props.match.params.bsn,
        snA: this.props.match.params.snA,
        index: this.state.index
      });
      if (json.list.length === 0) {
        this.setState({ hasMore: false });
        return;
      }
      if (
        this.state.result.length !== 0 &&
        this.state.result[this.state.result.length - 1].sn ===
          json.list[json.list.length - 1].sn
      ) {
        this.setState({ hasMore: false });
        return;
      }

      this.setState(prev => ({
        result: [...prev.result, ...json.list],
        index: (prev.index += 20)
      }));
    } catch (e) {
      console.log('InArticle api error');
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
      <div className={this.props.className}>
        <CardList>
          {this.state.result.map((card, index) => (
            <CardItem card={card} key={index} index={index} />
          ))}
        </CardList>
        <LoadButton
          loading={this.state.loading}
          hasMore={this.state.hasMore}
          fire={this.APIFire.bind(this)}
        />
      </div>
    );
  }
}
export default InArticle;
