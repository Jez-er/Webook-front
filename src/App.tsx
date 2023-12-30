import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AuthPage from './pages/auth.tsx'
import HomePage from './pages/home.tsx'
import InfoPage from './pages/info.tsx'
import MylibraryPage from './pages/mylibrary.tsx'
import SearcPage from './pages/searc.tsx'
import SettingsPage from './pages/settings.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/mylibrery",
    element: <MylibraryPage/>
  },
  {
    path: "/settings",
    element: <SettingsPage/>
  },
  {
    path: "/search",
    element: <SearcPage/>
  },
  {
    path: "/info",
    element: <InfoPage/>
  },
  {
    path:'/authentication',
    element: <AuthPage />
  }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export { App }

  
    
  

