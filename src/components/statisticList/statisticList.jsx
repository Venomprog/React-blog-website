import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArticles } from '../articlesList/articlesSlice'


const StatisticList = () => {

  const {articles} = useSelector(state => state.articles);

  function countWords(arr) {
    let summ = 0;

    for (let i = 0; i < arr.length; i++) {
      summ = summ + arr[i].title.length;
      summ = summ + arr[i].description.length;
      summ = summ + arr[i].text.length;
    }

    return summ
  }

  function renderTableCols (arr) {
    if (arr.length < 1) return

    return arr.map((item, i) => {
      const summWords = item.title.length + item.text.length + item.description.length
      return  (
        <tr key={i}>
          <td>{item.title}</td>
          {/* <td>Статья: {item.id}</td> */}
          <td>{summWords}</td>
          <td>{item.comments.length}</td>
        </tr>
      )
        
    })
  }

  function renderResultTableCol (arr) {

    let summ = 0;
    let comments = 0;

    for (let i = 0; i < arr.length; i++) {
      summ = summ + arr[i].title.length;
      summ = summ + arr[i].description.length;
      summ = summ + arr[i].text.length;
      comments = comments + arr[i].comments.length;
    }

    return (
      <tr>
        <td>Всего: {arr.length}</td>
        <td>{summ}</td>
        <td>{comments}</td>
      </tr>
    )
  }

  const tableElements = renderTableCols(articles);
  const resultTableElements = renderResultTableCol(articles);

  const words = countWords(articles)

  return (
      <div className="main-statistic__list">
        <p className="main-statistic__list-item articles-list__title">Статистика по статьям:</p>
        <table className='main-statistic__table' cellPadding="0" cellSpacing="0">
          <thead>
            <tr>
              <th>Заголовок</th>
              <th>Количество слов</th>
              <th>Количество комментариев</th>
            </tr>
          </thead>
          <tbody>
            {tableElements}
            {resultTableElements}
          </tbody>
        </table>
      </div>
  )
}

export default StatisticList