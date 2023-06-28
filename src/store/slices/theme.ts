import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTheme } from "../../models/theme";

const THEME_INITIAL_STATE: TTheme = {
  mode: "light",
  menuOpen: false,
};

export const slice = createSlice({
  name: "theme",
  initialState: THEME_INITIAL_STATE,
  reducers: {
    toggleTheme(state: TTheme) {
      state.mode = state.mode === "light" ? "dark" : "light";
      return state;
    },
    toggleMenu(state: TTheme) {
      state.menuOpen = !state.menuOpen;
      return state;
    },
    setMenu(state: TTheme, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
      return state;
    },
  },
});

export const themeSliceActions = slice.actions;

export default slice.reducer;
