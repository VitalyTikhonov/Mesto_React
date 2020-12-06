import PopupForm from './PopupForm';
// import PopupViewImage from './PopupViewImage';
import closeImage from '../images/close.svg';
import { useEffect } from 'react';

function Popup(props) {
  const { formConfig, formConfig: { name }, handlePopupControlClick, formsMap } = props;

  useEffect(() => {
    const popup = document.getElementById(`${name}Popup`)
    function handleEscape(event) {
      if (event.key === 'Escape' || event.target === popup) {
        const eventImitation = { target: { id: name + 'Elem' }}
        handlePopupControlClick(eventImitation);
      }
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleEscape);
    };
  });


  return (
    <div className="popup popup_is-open" id={name + 'Popup'} tabIndex={0}>
      <div className="popup__slot">
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          id={name + 'Elem'}
          onClick={handlePopupControlClick}
        />
        <PopupForm formsMap={formsMap} formConfig={formConfig} />
      </div>
    </div>
  )
}

export default Popup;
