import styled from 'styled-components/macro';
const LoadButton = styled.button`
  cursor: pointer;
  outline: none;
  color: white;
  background: none;
  border: none;
  padding: 10px;
  &:active {
    border: none;
    background-color: gray;
  }
`;
export default LoadButton;
