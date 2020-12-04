import closeImage from '../images/close.svg';

function Popup() {
  return (
    <div className="popup" tabIndex={0}>
      <img src={closeImage} alt="Close" className="popup__close" />
    </div>
  )
}

export default Popup;
