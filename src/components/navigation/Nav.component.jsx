import NavHome from '../../assets/icon-nav-home.svg';
import Logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import MovieIcon from '../../assets/icon-nav-movies.svg';
import BookmarkIcon from '../../assets/icon-nav-bookmark.svg';
import TvIcon from '../../assets/icon-nav-tv-series.svg';
import Avatar from '../../assets/image-avatar.png';
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
        <NavLink to={'/'}>
          <IconImage src={NavHome} />
        </NavLink>
        <NavLink to={'movies'}>
          <IconImage src={MovieIcon} />
        </NavLink>
        <NavLink to={'tvseries'}>
          <IconImage src={TvIcon} />
        </NavLink>
        <IconImage src={BookmarkIcon} />
      </NavButtonsContainer>
      <AvatarContainer>
        <AvatarImg src={Avatar} alt="Avatar image" />
      </AvatarContainer>
    </NavContainer>
  );
};

export default Nav;
