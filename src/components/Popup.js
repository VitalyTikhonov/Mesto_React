import closeImage from '../images/close.svg';

function Popup(props) {
  // console.log('closeImage', closeImage);
  const { isOpen, children, handleClosePopupClick } = props;

  return (
    <div className={`popup${isOpen ? ' popup_is-open' : ''}`} tabIndex={0}>
      <div className="popup__slot">
        <img src={closeImage} alt="Close" className="popup__close" onClick={handleClosePopupClick} />
        {children}
      </div>
    </div>
  )
}

export default Popup;
