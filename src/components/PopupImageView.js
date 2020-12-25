import { memo } from 'react';

const PopupImageView = memo(function PopupImageView(props) {
  const { card } = props;

  return (
      <div className="popup__content popup__content_type_image-view-card">
        <img src={card} alt="" className="popup__image" tabIndex={0} />
      </div>
  )
});

export default PopupImageView;
