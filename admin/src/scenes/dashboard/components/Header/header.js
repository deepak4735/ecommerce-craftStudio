import React from 'react';
import Search from '@material-ui/icons/Search';

// Import styles
import {
  HeaderContainer,
  UserInfoContainer,
  SearchContainer,
  CompanyNameAndLogo
} from './styles';

// Import components
import User from '../../../../components/User/user';
import SignOut from './components/signOut';

const Header = () => {
  return (
    <HeaderContainer>
      <CompanyNameAndLogo>
        <h2>Craftstudio admin</h2>
      </CompanyNameAndLogo>
      <SearchContainer>
        <Search />
        <input placeholder='Search...' />
      </SearchContainer>
      <UserInfoContainer>
        <p>User: </p>
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
