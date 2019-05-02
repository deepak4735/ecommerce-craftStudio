import React from 'react';
import Search from '@material-ui/icons/Search';

// Import styles
import { HeaderContainer, UserInfoContainer, SearchContainer } from './styles';

// Import components
import User from '../../../../components/User/user';
import SignOut from './components/signOut';

const Header = () => {
  return (
    <HeaderContainer>
      <UserInfoContainer>
        {/*        <p>User: </p>
        <User>
          {({ data: { currentUser } }) => {
            if (currentUser) return <p>{currentUser.name}</p>;
            return null;
          }}
        </User>
        <SignOut /> */}
      </UserInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
