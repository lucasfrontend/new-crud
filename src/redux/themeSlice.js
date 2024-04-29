import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light', 
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      console.log("setTheme")
      state.mode = action.payload; 
      // Actualiza el modo del tema según el valor proporcionado en la acción
    },
  },
});

export const { setTheme  } = themeSlice.actions;

export default themeSlice.reducer;