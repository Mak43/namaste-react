import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
// import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const About = lazy(() => import("./components/About")); // dynamic loading
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName]= useState("Elon Musk")
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="res-layout">
        <UserContext.Provider value={{ loggedInUser: "maksongara" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};
//will create routes and it has an array of route
const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading.....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
