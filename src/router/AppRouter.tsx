import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import DashboardLayout from '../components/layout/DashboardLayout';
import UsersPage from '../pages/UsersPage';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/users" replace />,
      },
      {
        path: 'users',
        element: <UsersPage />,
      },
      // {
      //   path: 'users/:id',
      //   element: <UserDetailsPage />,
      // },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
