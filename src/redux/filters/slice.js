import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: localStorage.getItem('searchQueryBills') || '',
  filterType: [],
  filterPerson: [],

};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.search = action.payload;
    },

    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },

    setFilterPerson: (state, action) => {
      state.filterPerson = action.payload;
    },
  }
});

export const {
  setSearchQuery,
  setFilterType,
  setFilterPerson
} = filtersSlice.actions;
export default filtersSlice.reducer;
