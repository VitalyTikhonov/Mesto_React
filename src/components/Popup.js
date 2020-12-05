// import React from 'react';
// import ReactDOM from 'react-dom';
import PopupForm from './PopupForm';
// import PopupViewImage from './PopupViewImage';
import closeImage from '../images/close.svg';

function Popup(props) {
  const { formConfig, handlePopupControlClick } = props;

  return (
    // return ReactDOM.render(
    //   <React.StrictMode>
    <div className="popup popup_is-open" tabIndex={0}>
      <div className="popup__slot">
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          id={formConfig.name + 'Elem'}
          onClick={handlePopupControlClick}
        />
        <PopupForm formConfig={formConfig} />
      </div>
    </div>
    // </React.StrictMode>,
    // document.querySelector('root')
  )
}

export default Popup;
