import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../page/Home';
import Login from '../page/Login';
import Register from '../page/Register';
import PrivateRoute from './PrivateRoute';
import BookDetails from '../page/BookDetails';
import AllBooks from '../page/AllBooks';
import AddBook from '../components/ui/BookCard/AddBook/AddBook';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
              <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: <AddBook />,
      },
      {
        path: "/all-books",
        element: <AllBooks />,
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/register',
        element: <Register/>
      },
    ],
  },
  
]);

export default routes;