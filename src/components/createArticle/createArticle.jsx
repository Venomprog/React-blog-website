import '../createArticle/create-article.scss'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { articlesCreated } from '../articlesList/articlesSlice';

const CreateArticle = () => {

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const {articles} = useSelector(state => state.articles);

  const changeTitle = (e) => {
    const value = e.target.value;
    setTitle(value);
  }
  const changeDescr = (e) => {
    const value = e.target.value;
    setDescr(value);
  }
  const changeText = (e) => {
    const value = e.target.value;
    setText(value);
  }
  const changeDate = (e) => {
    const value = e.target.value;
    setDate(value);
  }

  const onSentForm = (e) => {
    e.preventDefault();
    const article = {
      id: +articles.length + 1,
      title: title,
      description: descr,
      text: text,
      date: date,
      comments: []
    }
    dispatch(articlesCreated(article))
  }

  return (
    <div className="article-create">
      <h2 className='article-create__title articles-list__title'>Создайте свою статью</h2>
      <form className="article-create__form" onSubmit={onSentForm}>
        <div className='article-create__form-row'>
          <input 
            className="article-create__form-input"
            type="text" 
            required
            name="article-title" 
            id="article-title" 
            placeholder="Название статьи"
            value={title}
            onChange={changeTitle}
          />
          <input 
            className="article-create__form-input"
            type="text" 
            required
            name="article-date" 
            id="article-date" 
            placeholder="Дата публикации"
            value={date}
            onChange={changeDate}
          />
        </div>
        <div className='article-create__form-block'>
          <textarea 
              className="article-create__form-input"
              type="text" 
              required
              name="article-descr" 
              id="article-descr" 
              placeholder="Описание"
              value={descr}
              onChange={changeDescr}
            />
        </div>
        <div className='article-create__form-block'>
          <textarea 
            className="article-create__form-input long-text"
            type="text" 
            required
            name="article-date" 
            id="article-date" 
            placeholder="Текст статьи"
            value={text}
            onChange={changeText}
          />
        </div>

        <button className='article-create__form-button' type='submit'>Создать статью</button>
      </form>
    </div>
  )
}

export default CreateArticle