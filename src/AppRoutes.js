import { NotFound, Home, SignIn } from './Components';

const AppRoute = [
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/signIn',
    element: <SignIn />,
  },
];

export default AppRoute;
