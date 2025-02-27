import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/context/UserContext";

const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   const data = {
  //     name: "Aadesh",
  //   };
  //   setUserName(data.name);
  // }, []);

  return (
    // <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <div>
      <Header />
      <Outlet />
    </div>
    // </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading ...</h1>}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
