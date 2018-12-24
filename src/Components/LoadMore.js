import React from 'react';
import styled from 'styled-components';
const Loader = ({ className, loading, hasMore, fire }) => (
  <div className={className}>
    {loading && <p>Loading...</p>}
    {!loading && hasMore && (
      <button className="loading-btn" onClick={fire}>
        Load More
      </button>
    )}
    {!loading && !hasMore && <p>已經到底了!</p>}
  </div>
);
export default styled(Loader)`
  p,
  button.loading-btn {
    padding: 10px;
    margin: 10px 0;
  }
  button.loading-btn {
    width: 90%;
    cursor: pointer;
    outline: none;
    color: white;
    background: none;
    border: none;
    border: 2px solid rgb(100, 40, 40);
    border-radius: 10px;
    opacity: 0.8;
    &:hover {
      background-color: rgb(100, 40, 40);
      opacity: 1;
    }
    &:active {
      background-color: rgb(30, 30, 30);
    }
  }
`;
