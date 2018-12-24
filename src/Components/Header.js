import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const backButton = () => window.history.back();
class Header extends React.Component {
  getTitle(path) {
    switch (path.split('/')[1]) {
      case '':
        return '熱門看板';
      case 'search':
        return '搜尋看板';
      case 'favorite':
        return '我的最愛';
      case 'about':
        return '關於';
      default:
        return '巴哈閱讀器';
    }
  }
  render() {
    return (
      <header className={this.props.className}>
        {this.props.location.pathname.split('/').length > 2 && (
          <div className="back-button" onClick={backButton}>
            <FontAwesomeIcon icon="chevron-left" />
          </div>
        )}
        <h1 className="App-name">
          {this.getTitle(this.props.location.pathname)}
        </h1>
      </header>
    );
  }
}
export default withRouter(styled(Header)`
  -webkit-app-region: drag;
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgb(30, 30, 30);
  div.back-button {
    position: absolute;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.4em;
  }
  .App-name {
    font-size: 18px;
    padding: 0;
    margin: 0;
    justify-content: center;
    height: inherit;
    width: 100%;
    display: flex;
    align-items: center;
  }
`);
