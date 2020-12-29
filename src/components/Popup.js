import PopupForm from './PopupForm';
import PopupImageView from './PopupImageView';
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

  function handleCloseIconClick() {
    if (allowPopupClose) {
      controlPopupDisplay(false);
    }
  }

  useEffect(() => {
    function handleEscapeAndClickBeyond(event) {
      if (allowPopupClose && (event.key === 'Escape' || (event.type === 'click' && event.target === popupRef.current))) {
        controlPopupDisplay(false);
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
    <div className="popup popup_is-open" ref={popupRef} tabIndex={0}>
      <div className="popup__slot">
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          onClick={handleCloseIconClick}
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