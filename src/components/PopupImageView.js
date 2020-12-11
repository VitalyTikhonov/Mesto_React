export default function PopupImageView(props) {
  const { selectedCard } = props;

  return (
      <div className="popup__content popup__content_type_image-view-card">
        <img src={selectedCard} alt="" className="popup__image" tabIndex={0} />
      </div>
  )
}
