import Layout from "@/app/layouts/Layout";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import NotFoundPage from "@/pages/NotFoundPage/ui/NotFoundPage";
import QuestionPage from "@/pages/QuestionPage/ui/QuestionPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "question/:id",
        element: <QuestionPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
