"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilms } from "utils/api";

// export const fetchFilms = createAsyncThunk(
//   "films/fetchFilms",
//   async (_, { rejectWithValue }) => {
//     try {
//       const films = await getFilms();
//       return films;
//     } catch (err) {
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const initialState = {
  entities: [],
  preview: {},
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setFilms(state, { payload }) {
      state.entities = payload;
    },
    addFilm(state, { payload }) {
      state.entities.push(payload);
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
    setPreview(state, { payload }) {
      state.preview = payload;
    },
    editFilm(state, { payload }) {
      const { filmId, data } = payload;
      state.entities = state.entities.map((film) => {
        if (film.id === filmId) {
          return {
            ...film,
            title: data.title,
            director: data.director,
            year: data.year,
            poster: data.poster,
          };
        }
        return film;
      });
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
    deleteFilm(state, { payload }) {
      state.entities = state.entities.filter((film) => film.id !== payload);
      localStorage.setItem("filmsState", JSON.stringify(state));
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchFilms.fulfilled, (state, { payload }) => {
  //     state.entities = payload.entities;
  //   });
  //   builder.addCase(fetchFilms.rejected, (state, { payload }) => {
  //     console.log(payload);
  //   });
  // },
});

export const { setFilms, addFilm, setPreview, editFilm, deleteFilm } =
  filmsSlice.actions;

export default filmsSlice.reducer;
