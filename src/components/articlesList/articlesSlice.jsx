import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
  articles: [],
  articlesLoadingStatus: 'idle',
}



export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  () => {
    const {request} = useHttp();
    return request("http://localhost:3000/articles")
  }
)

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    articlesCreated: (state, action) => {
      state.articles.push(action.payload)
    },
    commentCreated: (state, action) => {
      const {id, name, text} = action.payload;
      const newComment = {
        id: "123",
        name: name,
        text: text
      }

      for (let i = 0; i < state.articles.length; i++){
        if (state.articles[i].id === id) {
          state.articles[i].comments.push(newComment)
        }
      }
    },

  },
  extraReducers: (builder)  => {
    builder
          .addCase(fetchArticles.pending, state => {state.articlesLoadingStatus = 'loading'})
          .addCase(fetchArticles.fulfilled, (state, action) => {
            state.articlesLoadingStatus = 'idle';
            state.articles = action.payload;
          })
          .addCase(fetchArticles.rejected, state => {
            state.articlesLoadingStatus = 'error'
          })
          .addDefaultCase(() => {})
  }
});

const {actions, reducer} = articlesSlice;

export default reducer;

export const {
  articlesCreated,
  commentCreated
} = actions