import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './redux/missionsSlice';
import rocketsReducer from './redux/rocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
