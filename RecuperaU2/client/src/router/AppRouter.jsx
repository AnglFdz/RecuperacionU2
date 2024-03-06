import React, { useContext } from 'react';
import SignInPage from '../modules/auth/SignInPage';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import AuthContext from '../config/context/auth-context';
import AdminLayout from '../modules/admin/AdminLayout';
import UserLayout from '../modules/admin/users/UserLayout';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  const rol = localStorage.getItem('rol');
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {
        user.signed && rol == "ADMIN_ROLE"? (
        <>
            <Route path='/' element={<AdminLayout/>} >
              <Route path='admin' element={<>ADMIN</>} />
              <Route path='products' element={<> PRODUCTOS </>} />
            </Route>
          </>
          ) : user.signed && rol == "USER_ROLE" ?(<>
              <Route path='/' element={<AdminLayout/>} >
              <Route path='users' element={<UserLayout/>} />
              <Route path='products' element={<> PRODUCTOS </>} />
            </Route>
          </>)
          : (
            
        <Route path='/' element={<SignInPage />} />
          )
        } {}
       <Route path='/*' element={<>404 NOT FOUND</>} />
      </>
    )
  );
  return <RouterProvider router={router}/>;
}; 

export default AppRouter
