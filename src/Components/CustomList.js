import styled from 'styled-components/macro';
const CustomList = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;
  & > li {
    &:hover {
      opacity: 0.8;
      background-color: rgb(20, 20, 120);
    }
    cursor: pointer;
    user-select: none;
    text-align: left;
    border-bottom: 1px solid gray;
    p {
      padding: 5px;
    }
    & > a {
      padding: 5px;
      display: flex;
      align-items: center;
      & > img {
        padding: 0;
        height: 50px;
        width: 50px;
        min-width: 50px;
        object-fit: cover;
        border-radius: 100%;
        margin-right: 10px;
      }
      & > p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export default CustomList;
