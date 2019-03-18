import React from 'react';

// Import styles
import { HeaderContainer, UserInfoContainer, SearchContainer } from './styles';

// Import components
import User from '../../../../components/User/user';
import SignOut from './components/signOut';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <input defaultValue='Search...' />
      </SearchContainer>
      <UserInfoContainer>
        <p>Logged in as: </p>
        <User>
          {({ data: { currentUser } }) => {
            if (currentUser) return <p>{currentUser.name}</p>;
            return null;
          }}
        </User>
        <SignOut />
      </UserInfoContainer>
    </HeaderContainer>
  );
};

export default Header;
