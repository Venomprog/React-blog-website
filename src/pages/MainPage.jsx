
import ArticlesList from '../components/articlesList/articlesList'
import StatisticList from '../components/statisticList/statisticList';
import CreateArticle from '../components/createArticle/createArticle';

const MainPage = () => {
  return (

    <div className='main-page'>
      <section className='main-hero container'>
        <h1 className='main-hero__title'>Just Blog Web-site</h1>

        <ArticlesList/>
        <CreateArticle/>
      </section>
      <section className="main-statistic container">
        <StatisticList/>
      </section>  
    </div>

  )
}

export default MainPage