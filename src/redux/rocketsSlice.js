import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async (_, { rejectWithValue }) => axios.get(URL).then((response) => response.data.map(({
  id, rocket_name: name, rocket_type: type, flickr_images: images, description,
}) => ({
  id, name, type, images, description,
}))).catch((error) => rejectWithValue(error.message)));

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => ({ ...state, loading: true }))
      .addCase(fetchRockets.fulfilled, (state, action) => (
        { ...state, rockets: action.payload, loading: false }))
      .addCase(fetchRockets.rejected, (state, action) => (
        { ...state, error: action.payload, loading: false }));
  },
});

export default rocketsSlice.reducer;
