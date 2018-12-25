import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import View from './View';
class App extends Component {
  render() {
    return (
        <div className={this.props.className}>
          <Header />
          <main>
            <View />
          </main>
          <Footer />
        </div>
    );
  }
}
export default styled(App)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0) !important;
  color: silver;
  text-align: center;
  main {
    overflow: auto;
    height: 100%;
    & > * {
      height: 100%;
    }
  }
`;
