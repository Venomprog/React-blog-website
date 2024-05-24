import '../app/app.scss'
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Spinner from "../spinner/spinner";
import logo from '../../logo.svg'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
// import { fetchArticles } from './articlesSlice'
import { fetchArticles } from '../articlesList/articlesSlice';
import { useEffect, useState } from 'react';

const MainPage = lazy(() => import('../../pages/MainPage'));
const DetailArticlePage = lazy(() => import('../../pages/DetailArticle'));

function App() {

  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useDispatch();

  if (firstLoad){
    // dispatch(fetchArticles())
    setFirstLoad(false)
  }


  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className='App-header__nav'>
            <Link className="App-header__nav-link" to={`/`}>
              Главная
            </Link>
          </nav>
        </header>
        <main>
          <Suspense fallback={<Spinner/>}>
            <Routes>
                <Route  path="/" element={<MainPage/>}/>
                <Route  path="/:articleId" element={<DetailArticlePage/>}/>
                {/* <Route  path="/comics/:comicId" element={<SingleComicPage/>}/> */}
                {/* <Route  path="*" element={<Page404/>}/> */}
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>

  );
}

export default App;
