import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../features/products/productApi";
// import { movieAPi} from "../features/dashboard/movie/MovieAPi";
import { userApi } from "../features/dashboard/auth/userApi";
import { userSlice } from "../features/dashboard/auth/userSlice";
import { cartSlice } from "../features/Cart/cartSlice";
import { orderApi } from "../features/Order/orderApi";



export const store = configureStore({
 
  reducer: {
    [productApi.reducerPath]:productApi.reducer,
    // [movieAPi.reducerPath]:movieAPi.reducer
    [userApi.reducerPath]:userApi.reducer,
    [orderApi.reducerPath]:orderApi.reducer,
    [userSlice.name]:userSlice.reducer,
    [cartSlice.name]:cartSlice.reducer
    
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat([
    productApi.middleware,
    userApi.middleware,
    orderApi.middleware
    
  ])
})