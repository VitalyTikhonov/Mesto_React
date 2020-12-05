import PopupForm from './PopupForm';
// import PopupViewImage from './PopupViewImage';
import closeImage from '../images/close.svg';

function Popup(props) {
  const { formConfig, handlePopupControlClick, formsMap } = props;

  return (
    <div className="popup popup_is-open" tabIndex={0}>
      <div className="popup__slot">
        <img
          src={closeImage}
          alt="Close"
          className="popup__close"
          id={formConfig.name + 'Elem'}
          onClick={handlePopupControlClick}
        />
        <PopupForm formsMap={formsMap} formConfig={formConfig} />
      </div>
    </div>
  )
}

export default Popup;
