import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'
import getConfig from '../utils/getConfig';

export const purchasesSlice = createSlice({
   name: 'purchases',
   initialState: [],
   reducers: {
      setPurchases: (state, action) => {
         const purchases = action.payload
         return purchases
      }
   }
})

export const getPurchasesThunk = () => (dispatch) => {
   return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases/', getConfig())
      .then(res => dispatch(setPurchases(res.data.data.purchases)))
}

export const { setPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;