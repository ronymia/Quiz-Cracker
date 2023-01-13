import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import QuizWorld from "./pages/QuizWorld";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home />
        },
        {
          path: "/quizWorld/:quizId",
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <QuizWorld />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}