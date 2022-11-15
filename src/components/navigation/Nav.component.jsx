import NavHome from '../../assets/icon-nav-home.svg';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import MovieIcon from '../../assets/icon-nav-movies.svg';
import BookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import TvIcon from '../../assets/icon-nav-tv-series.svg';
import Avatar from '../../assets/image-avatar.png';
import NavItem from './NavItem';
import {
  NavContainer,
  IconImage,
  FlixIcon,
  FlixIconContainer,
  NavButtonsContainer,
  AvatarContainer,
  AvatarImg,
} from './nav.styles';

const Nav = (props) => {
  return (
    <NavContainer>
      <FlixIconContainer>
        <FlixIcon src={Logo} />
      </FlixIconContainer>
      <NavButtonsContainer>
        <NavItem link="/" clicked={props.clicked}>
          <IconImage src={NavHome} />
        </NavItem>
        <NavItem link="movies">
          <IconImage src={MovieIcon} />
        </NavItem>
        <NavItem link="tvseries">
          <IconImage src={TvIcon} />
        </NavItem>
        <NavItem link="authentication">
          <IconImage src={BookmarkIcon} />
        </NavItem>
      </NavButtonsContainer>
      <AvatarContainer>
        <AvatarImg src={Avatar} alt="Avatar image" />
      </AvatarContainer>
    </NavContainer>
  );
};

export default Nav;
