/** @format */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  missions: [],
  error: '',
};

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data.map(
      ({ mission_id: missionId, mission_name: missionName, description }) => ({
        missionId,
        missionName,
        description,
      }),
    );
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMissions.pending]: (state) => {
      state.loading = true;
    },
    [fetchMissions.fulfilled]: (state, action) => {
      state.loading = false;
      state.missions = action.payload;
      state.error = '';
    },
    [fetchMissions.rejected]: (state, action) => {
      state.loading = false;
      state.missions = [];
      state.error = action.error.message;
    },
  },
});

export default missionsSlice.reducer;
