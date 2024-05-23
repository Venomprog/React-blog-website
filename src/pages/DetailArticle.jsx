import { useLocation } from "react-router-dom";
import Comments from "../components/comments/comments";

const DetailArticlePage = () => {

  let { state } = useLocation();

  return (
    <section className="article-detail container">
      <div className="article-detail__content">
        <h1 className="article-detail__title">{state.title}</h1>
        <p className="article-detail__date">
          Дата публикации: <span>{state.date}</span>
        </p>
        <p className="article-detail__text">{state.text}</p>
        <Comments comments={state.comments} articleId={state.id}/>
      </div>
    </section>
  )
}

export default DetailArticlePage