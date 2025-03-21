// Libraries
import styled from 'styled-components';

// Other Components
import UserCharacter from './UserCharacter';
import UserInfo from './UserInfo';
import CornerList from '../corner/CornerList';
import LogContainer from '../log/LogContainer';


const LUContainer = ({inputName, balance, logData}) => {
  return (
    <Container>
      <UserContainer>
        <UserCharacter />
        <UserInfo 
          inputName={inputName}
          balance={balance}
        />
      </UserContainer>
      <LogContainer logData={logData}></LogContainer>
      <CornerList />
    </Container>
  );
};

export default LUContainer;

// Styled Components
const Container = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  border: 3px solid black;
  background-color: #e9f2f1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
