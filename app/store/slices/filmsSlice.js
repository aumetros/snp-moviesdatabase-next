"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addFilmToDB, editFilmInDB, deleteFilmInDB, getFilms } from "utils/api";

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const films = await getFilms();
      dispatch(setFilms(films));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

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

export const editExistFilm = createAsyncThunk(
  "films/editExistFilm",
  async ({ filmId, data }, { rejectWithValue, dispatch }) => {
    try {
      const film = await editFilmInDB({ filmId, data });
      dispatch(editFilm({ filmId: film.id, data }));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteExistFilm = createAsyncThunk(
  "films/deleteExistFilm",
  async (filmId, { rejectWithValue, dispatch }) => {
    try {
      const film = await deleteFilmInDB(filmId);
      dispatch(deleteFilm(film.id));
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
    },
    deleteFilm(state, { payload }) {
      state.entities = state.entities.filter((film) => film.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.rejected, (state, { payload }) => {
      return { message: payload };
    });
    builder.addCase(addNewFilm.rejected, (state, { payload }) => {
      return { message: payload };
    });
    builder.addCase(editExistFilm.rejected, (state, { payload }) => {
      return { message: payload };
    });
    builder.addCase(deleteExistFilm.rejected, (state, { payload }) => {
      return { message: payload };
    });
  },
});

export const { setFilms, addFilm, setPreview, editFilm, deleteFilm } =
  filmsSlice.actions;

export default filmsSlice.reducer;
