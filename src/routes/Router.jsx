import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../layout/MainContainer";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import { RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import NewsLatest from "../pages/NewsLatest";
import NewsLatestPost from "../pages/NewsLatestPost";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import CreateNews from "../pages/CreateNews";
import FavoritePage from "../pages/FavoritePage";
import NewsContextProvider from "../contexts/NewsContextProvider";
import OldNews from "../pages/OldNews";
import OldNewsContextProvider from "../contexts/OldNewsContextProvider";
import CommentContextProvider from "../contexts/CommentContextProvider";
import ProtectRouteAdmin from "../authentication/feature/ProtectRouteAdmin";
import ProtectRouteUser from "../authentication/feature/ProtectRouteUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        path: "/createNews",
        element: (
          <ProtectRouteAdmin>
            <CreateNews />
          </ProtectRouteAdmin>
        ),
      },
      {
        path: "/news-latest",
        element: (
          <NewsContextProvider>
            <NewsLatest />
          </NewsContextProvider>
        ),
      },
      { path: "/news-latest/:newsId", element: <NewsLatestPost /> },
      {
        path: "/old-news/",
        element: (
          <OldNewsContextProvider>
            <OldNews />
          </OldNewsContextProvider>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <Header />
        <LoginPage />
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <ProtectRouteUser>
        <Header />
        <FavoritePage />
        <Footer />
      </ProtectRouteUser>
    ),
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
