import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/home';
import Bookmarks from '../pages/bookmarks';
import Explore from '../pages/explore';
import Lists from '../pages/lists';
import Messages from '../pages/messages';
import More from '../pages/more';
import Notifications from '../pages/notifications';
import NotFound from '../pages/notFound';
import Premium from '../pages/premium';
import Profile from '../pages/profile';
import MainLayout from '../layouts/main';
const routes = createBrowserRouter([
  {
    path: '/',

    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
      },
      {
        path: '/explore',
        element: <Explore />,
      },
      {
        path: '/lists',
        element: <Lists />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/more',
        element: <More />,
      },
      {
        path: '/notifications',
        element: <Notifications />,
      },
      {
        path: '/premium',
        element: <Premium />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
