import React, { Fragment, useContext } from 'react';
import ReactDom from 'react-dom';
import { SliderContext } from '../../store/sliderContext';
import DetailsHeading from '../Details-Heading/DetailsHeading';
import PlayButton from '../Play-Button/PlayButton';
import {
  BackdropDiv,
  OverLayDiv,
  StyledShowImage,
  ShowDetailsContainer,
  GradientContainer,
  CastList,
  DescriptionDiv,
  ShowImageContainer,
  GenreList,
  PlayButtonContainer,
  CloseButton,
} from './detailsModal.styles';

const Backdrop = (props) => {
  return <BackdropDiv onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const { currentSlide } = useContext(SliderContext);
  const actorsArr = [
    'Guywitha Beard',
    'Her Again',
    'Thatone Guy',
    'Pixie Stix',
    'Broseph Gabore',
    'Tightpants Capone',
    'Highkick McGee',
    'Cher',
    'Anomander Rake',
    'The Eel of Darujhistan',
    'Surly',
    'Tightwad Ina Suit',
    'Quick Ben',
    'Ganoes Paran',
    'Smiles',
    'One Eye Cat',
    'The Seguleh Brothers',
  ];
  const genreArr = [
    'So boring',
    'Snoozer',
    'Horror',
    'Adventure',
    'Action',
    'Mystery',
    'Period Piece',
    'Comedy',
    'Ridiculous',
    'Dont bother',
  ];

  // function to shuffle an array using Durstenfeld shuffle algorithm and return n elements
  function returnShuffledElements(array, n) {
    const temp = [];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      temp.push(array[i]);
    }
    const slicedArr = temp.slice(0, n);
    return slicedArr;
  }

  const actors = returnShuffledElements(actorsArr, 4).join(', ');
  const genre = returnShuffledElements(genreArr, 2).join(', ');

  return (
    <OverLayDiv>
      <ShowImageContainer>
        <PlayButtonContainer>
          <PlayButton />
        </PlayButtonContainer>
        <CloseButton onClick={props.onClose}>
          <ion-icon name="close"></ion-icon>
        </CloseButton>
        <StyledShowImage
          src={currentSlide.thumbnail.regular.medium}
          alt={`Movie title: ${currentSlide.title}`}
        />
        <GradientContainer />
      </ShowImageContainer>
      <ShowDetailsContainer>
        <DetailsHeading show={currentSlide} />
        <CastList>
          <span style={{ color: 'grey' }}>Cast:</span>
          <span>&nbsp;</span> {actors}
        </CastList>
        <GenreList>
          <span style={{ color: 'grey' }}>Genres:</span>
          <span>&nbsp;</span> {genre}
        </GenreList>
        <DescriptionDiv>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
            dictum fusce ut placerat orci nulla pellentesque. Augue interdum
            velit euismod in pellentesque massa placerat duis.
          </p>
        </DescriptionDiv>
      </ShowDetailsContainer>
    </OverLayDiv>
  );
};

const DetailsModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay onClose={props.onClose}/>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default DetailsModal;
