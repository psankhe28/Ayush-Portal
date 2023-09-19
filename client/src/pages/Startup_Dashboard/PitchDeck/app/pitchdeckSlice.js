import { createSlice } from "@reduxjs/toolkit";
import {formData} from "./pitchdeckFields";

const pitchdeckSlice = createSlice({
  name: "pitchdeck",
  initialState: formData,
  reducers: {
    updatePitch: (state, { payload }) => {
      if(Array.isArray(state[payload[0]])) {
        state[payload[0]] = [...state[payload[0]], payload[1]]
      } else state[payload[0]] = payload[1];
    },
    removeTile: (state, { payload }) => {
      state[payload[0]] = state[payload[0]].filter((x, index) => index !== payload[1]);
    }
  },
});
export const { updatePitch, removeTile } = pitchdeckSlice.actions;
export default pitchdeckSlice.reducer;
