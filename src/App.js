import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './ui/RootLayout';
import Main from './features/dashboard/Main';
import Login from './features/dashboard/auth/Login';
import Register from './features/dashboard/auth/Register';
import AddForm from './admin/AddForm';
import ProductAdmin from './admin/ProductAdmin';
import ProductEdit from './admin/ProductEdit/ProductEdit';

import ProductDetail from './features/products/ProductDetail';
import CartPage from './features/Cart/CartPage';
import ProfileMain from './features/Users/ProfileMain';
import AdminRoute from './ui/AdminRoute';
import OrderDetail from './features/Order/orderDetail';


const App = () => {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Main />

        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'register',
          element:<Register />
        },
        
        //Admin
        {
          element: <AdminRoute />,
          children: [
            {
              path: 'product-admin',
              element: <ProductAdmin />
            },
            {
              path: 'product-add',
              element: <AddForm />
            },
            {
              path: 'product-edit/:id',
              element: <ProductEdit />
            }
          ]
        },
        {
          path:'product-detail/:id',
          element:<ProductDetail />
        },
      
        {
          path:'cart-page',
          element:<CartPage />
        },
        {
          path:'user-profile',
          element:<ProfileMain />
        },
        {
          path: 'user-order/:id',
          element: <OrderDetail />
        },


      ]
    }
  ]);
  return <RouterProvider router={router} />
}

export default App