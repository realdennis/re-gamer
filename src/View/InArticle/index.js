import React, { Component } from 'react';
import LoadButton from '../../Components/LoadButton';
import API from '../../Lib/API';
import CustomList from '../../Components/CustomList';
import styled from 'styled-components';
const URL = 'https://api.gamer.com.tw/mobile_app/forum/v3/C.php';
const CardList = styled(CustomList)`
  li {
    border: none;
    opacity: 0.8;
    &:hover {
      background-color: black;
      opacity: 1;
    }
    img {
      max-width: 100%;
    }
    p.author,
    p.time {
      background-color: navy;
      margin: 0;
    }
    p.content{
      overflow:auto;
    }
  }
`;
class InArticle extends Component {
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
  highLight(e) {
    e.currentTarget.querySelectorAll('*').forEach(dom => {
      dom.style.color = 'silver';
      dom.style.backgroundColor = 'black';
    });
  }
  componentDidMount() {
    this.APIFire();
  }
  render() {
    return (
      <div className={this.props.className}>
        <CardList>
          {this.state.result.map((card, k) => (
            <li key={k}>
              <div>
                <p className="author">
                  {card.author} ({card.nickname})
                </p>
                <p className="time">{card.date}</p>
                <p
                  onClick={e => this.highLight(e)}
                  className="content"
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
export default InArticle;
