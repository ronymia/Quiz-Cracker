import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}