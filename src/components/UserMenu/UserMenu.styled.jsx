import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-weight: 700;
  color: white;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 6px 6px;
  font: inherit;
  cursor: pointer;
  border-radius: 5px;
  border: 2px solid black;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 10px;
  background-color: #59b2ff;
  box-shadow: 5px 5px 5px grey;

  &:hover {
    background-color: #31a2d3;
    color: white;
  }
`;
