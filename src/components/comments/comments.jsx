import '../comments/comments.scss'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { commentCreated } from '../articlesList/articlesSlice';
import { useSelector } from 'react-redux';

const Comments = ({comments, articleId}) => {

  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();


  const {articles} = useSelector(state => state.articles);
  let curComments = [];
  if (!articles.length < 1) {
    for (let i = 0; i < articles.length; i++){
      if (articles[i].id === articleId){
        curComments = articles[i].comments
      }
    }

  } else {
    curComments = false;
  }
  // const curComments = articles[articleId - 1].comments

  useEffect(() => {
    
  })


  const changeName = (e) => {
    const value = e.target.value;
    setName(value);
  }
  const changeCommentText = (e) => {
    const value = e.target.value;
    setCommentText(value);
  }

  const onSentForm = (e) => {
    e.preventDefault();

    const obj = {
      id: articleId,
      name: name,
      text: commentText
    }

    dispatch(commentCreated(obj))
  }

  function renderComments (arr) {

    if (arr.length < 1) return

    return arr.map(({name, text}, i) => {
      return  (
        <div className="comments-list__comment"  key={i}>
          <div className="comments-list__comment-name">{name}</div>
          <div className="comments-list__comment-text">{text}</div>
        </div>
      )
        
    })
  }


  const elements = curComments ?  renderComments(curComments) : <div>Комментарии не могут быть сейчас загружены, попробуйте вернуться на главную</div>
  const addCommentClass = curComments ? 'comments-add' : 'd-none'

  return (
    <div className="comments">
      <div className="comments-list">
        <h2 className="comments-list__title">Комментарии к статье:</h2>
        <div className="comments-list__content">
          {elements}
        </div>
      </div>
      <form className={addCommentClass} onSubmit={onSentForm}>
        <h3 className='comments-add__title comments-list__title'>Оставить свой комментарий</h3>
        <div className='comments-add__row'>
          <input 
            className='comments-add__input' 
            type="text" 
            required
            name="name" 
            id="name" 
            placeholder="Ваше имя/никнейм?"
            value={name}
            onChange={changeName}
          />
          <textarea 
            className='comments-add__input .long-text'
            type="text" 
            required
            name="commentText" 
            id="commentText" 
            placeholder="Ваш комментарий?"
            value={commentText}
            onChange={changeCommentText}
          />
        </div>
        <button className='comments-add__btn' type='submit'>
          Отправить
        </button>
      </form>
    </div>
  )
}

export default Comments