import styled from 'styled-components/macro';
const CustomList = styled.ul`
  margin: 0;
  list-style: none;
  text-align: left;
  padding: 0;
  li {
    &:hover {
      opacity: 0.8;
      background-color: rgb(20, 20, 120);
    }
    cursor: pointer;
    user-select: none;
    padding: 5px;
    border-bottom: 1px solid gray;
    & > a {
      display: flex;
      & > img {
        height: 50px;
        width: 50px;
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
