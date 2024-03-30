import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import LoginPage from 'pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { AppWrapper } from './App.styled';
import AllProductsPage from './pages/AllProductsPage/AllProductsPage';
import SuppliersPage from './pages/SuppliersPage/SuppliersPage';
import CustomersDataPage from './pages/CustomersDataPage/CustomersDataPage';

import { currentUser } from './redux/auth/operations';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <AppWrapper>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/dashboard" component={<LoginPage />} />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
            }
          />
          <Route
            path="/orders"
            element={
              <PrivateRoute redirectTo="/login" component={<OrdersPage />} />
            }
          />
          <Route
            path="/products"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<AllProductsPage />}
              />
            }
          />
          <Route
            path="/suppliers"
            element={
              <PrivateRoute redirectTo="/login" component={<SuppliersPage />} />
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<CustomersDataPage />}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
