import PopupForm from './PopupForm';
import PopupImageView from './PopupImageView';
import PageDimmer from './PageDimmer';
import closeImage from '../images/close.svg';
import { memo, useEffect, useState, useRef } from 'react';

const Popup = memo(function Popup(props) {
  const {
    contentsConfig,
    controlPopupDisplay,
    updateData,
    InputSet,
    inputStateValues,
    inputStateUpdater,
    card,
    toggleAuthDialog,
    // auxPopup,
    auxPopupText,
    // setAuxPopupText,
    apiResponseObtained,
    setApiResponseObtained,
  } = props;

  const [allowPopupClose, setAllowPopupClose] = useState(true);

  const popupRef = useRef();
  const popupSlotRef = useRef();

  function handleCloseClick() {
    if (allowPopupClose) {
      controlPopupDisplay(false);
    }
  }

  useEffect(() => {
    function handleEscape(event) {
      if (allowPopupClose && event.key === 'Escape') {
        controlPopupDisplay(false);
      }
      // console.log('event.target', event.target, '\nevent.currentTarget', event.currentTarget, '\nevent.type', event.type);
    }

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleEscape);
    };
  });

  return (
    <div className="popup popup_is-open" ref={popupRef} tabIndex={0}>
      <PageDimmer handleClick={handleCloseClick} />
      <div className="popup__slot" ref={popupSlotRef}>
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          onClick={handleCloseClick}
        />
        {(InputSet || auxPopupText) &&
          <PopupForm
            InputSet={InputSet}
            contentsConfig={contentsConfig}
            updateData={updateData}
            inputStateValues={inputStateValues}
            inputStateUpdater={inputStateUpdater}
            toggleAuthDialog={toggleAuthDialog}
            controlPopupDisplay={controlPopupDisplay}
            // auxPopup={auxPopup}
            auxPopupText={auxPopupText}
            // setAuxPopupText={setAuxPopupText}
            apiResponseObtained={apiResponseObtained}
            setApiResponseObtained={setApiResponseObtained}
            setAllowPopupClose={setAllowPopupClose}
          />}
        {card && <PopupImageView card={card} />}
      </div>
    </div>
  )
});

export default Popup;

// document.activeElement.blur(); // Чтобы попап не закрывался по Enter