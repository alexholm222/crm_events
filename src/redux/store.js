
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventsApiActions } from './ordersApiActions';
//slice
import filtersSlice from './filters/slice';
import dateRangeSlice from './dateRange/slice';


export const store = configureStore({
  reducer: {
    filters: filtersSlice,
    dateRange: dateRangeSlice,
    [eventsApiActions.reducerPath]: eventsApiActions.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    }).concat(eventsApiActions.middleware)
});

setupListeners(store.dispatch);
