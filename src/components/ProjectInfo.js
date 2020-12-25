import authorPhotoPath from '../images/vitaliytikhonov.jpg';

function ProjectInfo() {
  return (
    <section className="project-info root__section">
      <img
        src={authorPhotoPath}
        alt="Фото автора"
        className="project-info__avatar"
      />

        <div className="project-info__description">
          <h3 className="project-info__headline section-headline">Об авторе</h3>

          <p className="project-info__text">Я Виталий Тихонов. В&nbsp;2020&nbsp;г. прошел обучение профессии веб-разработчика в
          Яндекс.Практикуме.</p>

          <p className="project-info__text">Этот вариант «Места» – мой первый учебный проект на фреймворке React.js.</p>

          <p className="project-info__text">Здесь можно публиковать фотографии мест, которые вам интересны, и смотреть изображения, добавленные другими.</p>
        </div>
    </section>
  )
}

export default ProjectInfo;
