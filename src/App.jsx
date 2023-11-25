import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./route";
import { QueryClient, QueryClientProvider } from "react-query";
import { getProductFromLocalStorage } from "./helpers/helpers";
import { useDispatch } from "react-redux";
import { getProduct } from "./store/slice/ProductSlice";
import Sitemap from "./sitemap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();
const App = () => {
  const dispatch = useDispatch();
  const getProducts = () => {
    const product = getProductFromLocalStorage();
    dispatch(getProduct(product));
    console.log(product);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes?.map((route) => (
          <Route key={route.id} path={route.path} element={route.element} />
        ))}
        <Route path={"/sitemap.xml"} element={<Sitemap />} />
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
};

export default App;
