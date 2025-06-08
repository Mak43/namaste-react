import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const AppLayout = () => {
  return (
    <div className="res-layout">
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
};
//will create routes and it has an array of route
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: '/',
        element: <Body/>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  }
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
