import ArticlesListItem from './articlesListItem/articlesListItem'
import '../articlesList/articles-list.scss'
import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles } from './articlesSlice'

const ArticlesList = () => {

  const [search, setSearch] = useState('empty')

  const dispatch = useDispatch();

  const {articles} = useSelector(state => state.articles);


  function renderElements(arr){
    if (arr.length < 1) return

    return arr.map(({id, ...props}) => {
      return <ArticlesListItem  key={id} {...props} id={id}/>
    })
  }

  function renderSearchingElements (arr) {
    if (arr.length < 1) return


    const filteringArr = arr.filter(item => {
      return item.title.indexOf(search) > -1  // Если мы не найдём кусочек строки то просто не выполнится 
    })

    return filteringArr.map(({id, ...props}) => {
      return <ArticlesListItem  key={id} {...props} id={id}/>
    })

    // renderElements(filteringArr)
  }

  const onUpdateSearch = (e) => {
    const term = e.target.value;

    if (term == '') {
      setSearch('empty')
    } else {
      setSearch(term)
    }
  }



  // const elements = renderElements(articles);
  const elements = search === 'empty' ? renderElements(articles) : renderSearchingElements(articles);
  // const elements = search === 'empty' ? renderElements(articles) : renderElements(articles);

  return (
    <div className="articles-list">
      <div className='articles-list__top'>
        <h2 className="articles-list__title">Наши недавние статьи:</h2>
        <input className='articles-list__search' placeholder='Поиск статьи' onChange={onUpdateSearch}/>
      </div>
      <div className='articles-list__items'>
        {elements}
      </div>
    </div>
  )
}

export default ArticlesList