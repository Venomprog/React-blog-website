import { Link } from "react-router-dom"

const ArticlesListItem = ({title, description, date, text, id, comments}) => {

  return (
    <div className="articles-list__item">
      <div className="articles-list__item-top">
        <h3 className="articles-list__item-title">
          {title} 
        </h3>
        <p className="articles-list__item-description">
          {description}
        </p>
      </div>
      <div className="articles-list__item-bot">
        <Link className="articles-list__item-link" to={`/article-${id}`} state={{ title: title, description: description, date: date, text: text, comments, id }}>
          Подробнее
        </Link>
        <p className="articles-list__item-date">Дата: {date} Комментариев: {comments.length}</p>
      </div>
    </div>
  )
}

export default ArticlesListItem