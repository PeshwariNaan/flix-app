import NavHome from '../../assets/icon-nav-home.svg';
import Logo from '../../assets/logo.svg';
import MovieIcon from '../../assets/icon-nav-movies.svg'
import BookmarkIcon from '../../assets/icon-nav-bookmark.svg'
import TvIcon from '../../assets/icon-nav-tv-series.svg'
import Avatar from '../../assets/image-avatar.png'
import {
  HeaderContainer,
  IconImage,
  FlixIcon,
  FlixIconContainer,
  HeaderButtonsContainer,
  AvatarContainer,
  AvatarImg
} from './header.styles';

const Header = (props) => {
  return (
    <HeaderContainer>
      <FlixIconContainer>
        <FlixIcon src={Logo} />
      </FlixIconContainer>
      <HeaderButtonsContainer>
        <IconImage src={NavHome} />
        <IconImage src={MovieIcon} />
        <IconImage src={TvIcon} />
        <IconImage src={BookmarkIcon} />
      </HeaderButtonsContainer>
      <AvatarContainer>
        <AvatarImg src={Avatar} alt='Avatar image' />
      </AvatarContainer>
    </HeaderContainer>
  );
};

export default Header;
