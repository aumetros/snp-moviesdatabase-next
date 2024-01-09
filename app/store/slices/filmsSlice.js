"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addFilmToDB } from "utils/api";

export const addNewFilm = createAsyncThunk(
  "films/addNewFilm",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const newFilm = await addFilmToDB(data);
      dispatch(addFilm(newFilm));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(addNewFilm.rejected, (state, { payload }) => {
      return { message: payload };
    });
    // builder.addCase(fetchFilms.rejected, (state, { payload }) => {
    //   console.log(payload);
    // });
  },
});

export const { setFilms, addFilm, setPreview, editFilm, deleteFilm } =
  filmsSlice.actions;

export default filmsSlice.reducer;
