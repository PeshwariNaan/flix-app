import React, {Fragment, useContext} from 'react';
import ReactDom from 'react-dom'
import { SliderContext } from '../../store/sliderContext';
import { BackdropDiv, OverLayDiv } from './detailsModal.styles';

const Backdrop = (props) => {  
  return (
    <BackdropDiv onClick={props.onClose}  />   
  )
}

const ModalOverlay = (props) => {
  const {currentSlide} = useContext(SliderContext)
  return (
    <OverLayDiv >
      <img src={currentSlide.thumbnail.regular.medium} alt={`Movie title: ${currentSlide.title}`} />
      <h1>{currentSlide.title}</h1>
    </OverLayDiv>
  )
}


const DetailsModal = (props) => {
  
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
      {ReactDom.createPortal(<ModalOverlay  />, document.getElementById('overlay-root'))}
    </Fragment>
  )
}

export default DetailsModal