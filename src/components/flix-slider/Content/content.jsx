import React from 'react';
import {ContentContainer, CloseButton, BackdropImage} from './content.styles'


const Content = ({ show, onClose }) => (
  <ContentContainer>
    <BackdropImage src={show.thumbnail.regular.medium} />

  </ContentContainer>
);

export default Content;

{/* <ContentContainer >
<div className="content__background">
  <div className="content__background__shadow" />
  <div
    className="content__background__image"
    style={{ 'backgroundImage': `url(${show.thumbnail.regular.medium})` }}
  />
</div>
<div className="content__area">
  <div className="content__area__container">
    <h1 className="content__title">{show.title}</h1>
    <p className="content__description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
      eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
      quis quam congue, non fringilla orci placerat. Praesent sollicitudin
    </p>
  </div>
  <CloseButton onClick={onClose}>
  <ion-icon name="close"></ion-icon>
  </CloseButton>
</div>
</ContentContainer> */}