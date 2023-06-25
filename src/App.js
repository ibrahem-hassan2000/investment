
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import "./output.css"
import Cart from "./pages/Cart";
import Home from "./pages/home";
import Footer from "./components/HandelFooter/Footer";
import UpDate from "./pages/UpDate";
import { DataContext } from "./data/Context";
import data from './data/data.json'
import AddItem from "./pages/AddItem";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main
        style={{ minHeight: "calc(100vh - 360px)" }}
        className="container mx-auto px-2 mb-16 my-2 "
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: ":id",
        element: <UpDate />,
      },
      {
        path: "/additem",
        element: <AddItem />,
      },
    ],
  },
  {
    path: "/",
    element: <div>About</div>,
  },
]);
function App() {



  return (
    <div className="App">
      <DataContext.Provider value={data}>
      <RouterProvider router={router} />
      </DataContext.Provider>
      
    </div>
  );
}

export default App;
