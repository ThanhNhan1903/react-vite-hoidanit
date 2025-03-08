import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import RegisterPage from "./pages/register.jsx";
import UsersPage from "./pages/users.jsx";
import BookPage from "./pages/book.jsx";
import './style/global.css'
import TodoApp from "./components/todo/todoApp.jsx";
import ErrorPage from "./pages/error.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UsersPage />
      }, {
        path: "/books",
        element: <BookPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }, {
    path: "/register",
    element: <RegisterPage />
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  // </React.StrictMode>
);
