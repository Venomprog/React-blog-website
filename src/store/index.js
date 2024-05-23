import { configureStore } from '@reduxjs/toolkit';


import articles from '../components/articlesList/articlesSlice'

const stringMiddleware = (store) => (next) => (action) => { //можно считать что вместо next у нас dispatch (next потому что будет вызываться новый диспетч в след за другим)
  if (typeof action === 'string'){
    return next({
      type: action
    })
  } else {
    return next(action)
  }
}

const store = configureStore({
  reducer: {articles},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;