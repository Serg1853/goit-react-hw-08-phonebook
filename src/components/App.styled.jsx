import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 0px auto;
  align-items: center;
`;

export const LabelStyle = styled.label`
  width: 400px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: 4px 5px;
`;

export const InputStyle = styled.input`
  height: 25px;
  padding: 4px;
  width: 200px;
  border-radius: 5px;
  box-shadow: 2px 2px 2px grey;
`;

export const ButtonStyle = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px;
  font-weight: 500px;
  border-radius: 5px;
  background-color: #59b2ff;
  box-shadow: 5px 5px 5px grey;
  &:hover {
    background-color: #31a2d3;
    color: white;
  }
`;
export const avatarStyle = {
  m: 1,
  bgcolor: 'secondary.main',
};
export const toolbarStyle = {
  display: 'flex',
  columnGap: 3,
};
export const formStyle = {
  display: 'flex',
  backgroundColor: 'rgba(208, 224, 241, 0.822)',
  mt: 2,
  mb: 2,
  gap: 3,
};
