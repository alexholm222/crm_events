import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

const initialState = {
  draft: 0,
  customer: {},
  detail: {},
  numberBill: '',
  numberBillFirst: '',
  date: dayjs().locale('ru') || '',
  orders: [],
  nds: null,
};

export const mainInfoSlice = createSlice({
  name: 'mainInfo',
  initialState,
  reducers: {

    setDraft: (state, action) => {
      state.draft = action.payload;
    },

    setCustomer: (state, action) => {
      state.customer = action.payload;
    },

    setDetail: (state, action) => {
      state.detail = action.payload;
      state.nds = action.payload?.nds;
    },

    setNumberBill: (state, action) => {
      state.numberBill = action.payload;
    },

    setNumberBillFirst: (state, action) => {
      state.numberBillFirst = action.payload;
    },

    setDate: (state, action) => {
      state.date = action.payload;
    },

    setOrders: (state, action) => {
      state.orders = action.payload;
    },

    setNds: (state, action) => {
      state.nds = action.payload;
    }
  }
});

export const {
  setDraft,
  setCustomer,
  setDetail,
  setNumberBill,
  setDate,
  setOrders,
  setNumberBillFirst,
  setNds
} = mainInfoSlice.actions;
export default mainInfoSlice.reducer;
