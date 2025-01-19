import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  variant: "default",
  icon: null,
  title: "",
  description: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      state.variant = action.payload.variant;
      state.icon = action.payload.icon;
      state.title = action.payload.title;
      state.description = action.payload.description;
    },
    clearAlert(state) {
      state.variant = "default";
      state.icon = null;
      state.title = "";
      state.description = "";
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;
export default alertSlice.reducer;
