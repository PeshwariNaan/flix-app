import React, {Fragment} from 'react';
import ReactDom from 'react-dom'
import { BackdropDiv } from './detailsModal.styles';

const Backdrop = props => {
  return (
    <BackdropDiv onClick={props.onClose}  />   
  )
}

const ModalOverlay = props => {
  return (
    <div>

    </div>
  )
}


const DetailsModal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
    </Fragment>
  )
}

export default DetailsModal