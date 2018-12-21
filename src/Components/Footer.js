import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
const Footer = ({ className }) => (
  <footer className={className}>
    <ul>
      <li>
        <Link to="">
          <FontAwesomeIcon icon="fire" />
        </Link>
      </li>
      <li>
        <Link to="/search">
          <FontAwesomeIcon icon="search" />
        </Link>
      </li>
      <li>
        <Link to="/recent">
          <FontAwesomeIcon icon="star" />
        </Link>
      </li>
      <li>
        <Link to="/about">
          <FontAwesomeIcon icon="info-circle" />
        </Link>
      </li>
    </ul>
  </footer>
);
export default styled(Footer)`
  height: 40px;
  background-color: rgb(40, 40, 40);
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    li {
      font-size: 1.4em;
      & > a {
        /*For Router Link*/
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      width: 100%;
      display: flex;
    }
  }
`;
