import React from 'react';
import { CategoryIcon, ShowCard } from './card.styles';
import MovieImage from '../../assets/mission-saturn.jpg';
import MovieIcon from '../../assets/icon-category-movie.svg';
import TVIcon from '../../assets/icon-category-tv.svg';

const Card = (props) => {
  return (
    <ShowCard>
      <img src={MovieImage} />
      <p>
        {props.year} -{' '}        
                
        <span>{props.category} </span>
        <span> {props.rating}</span>
      </p>
      
      <h2>{props.title}</h2> <CategoryIcon src={MovieIcon} />  
    </ShowCard>
  );
};

export default Card;
