import { configureStore } from "@reduxjs/toolkit";
import alert from "./slices/alert";

export const store = configureStore({
  reducer: {
    alert,
  },
});
