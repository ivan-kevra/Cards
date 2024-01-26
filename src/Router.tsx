import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Decks } from './pages/private/pages/Decks'
import { Decks2 } from './pages/private/pages/Decks2'
import { CheckEmail } from './pages/public/checkEmail/CheckEmail'
import { CreateNewPassword } from './pages/public/createNewPassword/CreateNewPassword'
import { ForgotPassword } from './pages/public/forgotPassword/ForgotPassword'
import Profile from './pages/public/profile/Profile'
import { SignIn } from './pages/public/signIn/SignIn'
import { SignUp } from './pages/public/signUp/SignUp'

const publicRoutes: RouteObject[] = [
  { element: <SignIn />, path: '/login' },
  { element: <SignUp />, path: '/register' },
  { element: <Profile />, path: '/profile' },
  { element: <CheckEmail />, path: '/check-emil' },
  { element: <ForgotPassword />, path: '/forgot-password' },
  { element: <CreateNewPassword />, path: '/new-password' },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]

const router = createBrowserRouter([
  { children: privateRoutes, element: <PrivateRoutes /> },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
