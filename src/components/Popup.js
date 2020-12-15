import PopupForm from './PopupForm';
import PopupImageView from './PopupImageView';
import closeImage from '../images/close.svg';
import { useEffect } from 'react';

function Popup(props) {
  const {
    contentsConfig,
    contentsConfig: { name },
    handlePopupControlAction,
    updateData,
    formsMap,
    card,
  } = props;

  useEffect(() => {
    const popup = document.getElementById(`${name}Popup`)
    function handleEscapeAndClickBeyond(event) {
      if (event.key === 'Escape' || (event.type === 'click' && event.target === popup)) {
        const eventImitation = { target: { id: name + 'OpenElem' } }
        handlePopupControlAction(eventImitation);
      }
    }

    document.addEventListener('keydown', handleEscapeAndClickBeyond);
    document.addEventListener('click', handleEscapeAndClickBeyond);

    return () => {
      document.removeEventListener('keydown', handleEscapeAndClickBeyond);
      document.removeEventListener('click', handleEscapeAndClickBeyond);
    };
  });

  return (
    <div className="popup popup_is-open" id={name + 'Popup'} tabIndex={0}>
      <div className="popup__slot">
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          id={name + 'OpenElem'}
          onClick={handlePopupControlAction}
        />
        {formsMap && <PopupForm formsMap={formsMap} contentsConfig={contentsConfig} updateData={updateData} />}
        {card && <PopupImageView card={card} />}
      </div>
    </div>
  )
}

export default Popup;
