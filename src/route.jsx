import Gallery from "./Components/swiper/Gallery";
import MyWork from "./pages/MyWork/MyWork";
import {
  Basket,
  Catalog,
  CatalogDetail,
  Category,
  Contact,
  EditProductImg,
  Main,
  NewsAndUseful,
  NewsComp,
  Onas,
  Product,
  SubCategory,
  WeNews,
} from "./pages/User";
import { Login } from "./pages/login/Login";
import Work from "./pages/work/work";

export const routes = [
  { id: 1, path: "/", element: <Main />, priority: "1.0" },
  { id: 2, path: "/about-us", element: <Onas />, priority: "0.8" },
  { id: 3, path: "/new/:id", element: <NewsAndUseful />, priority: "0.7" },
  { id: 4, path: "/new", element: <WeNews />, priority: "0.6" },
  { id: 5, path: "/basket", element: <Basket />, priority: "0.5" },
  { id: 6, path: "/catalog", element: <Catalog />, priority: "0.7" },
  {
    id: 7,
    path: "/catalog/:id/:slug",
    element: <CatalogDetail />,
    priority: "0.7",
  },
  { id: 8, path: "/contact", element: <Contact />, priority: "0.5" },
  { id: 9, path: "/category", element: <Category />, priority: "0.6" },
  { id: 10, path: "/login", element: <Login />, priority: "0.5" },
  { id: 11, path: "/product", element: <Product />, priority: "0.6" },
  { id: 12, path: "/sub-category", element: <SubCategory />, priority: "0.6" },
  { id: 13, path: "/news", element: <NewsComp />, priority: "0.6" },
  {
    id: 14,
    path: "/edit-image/:id",
    element: <EditProductImg />,
    priority: "0.7",
  },
  { id: 15, path: "/work-cat", element: <Work />, priority: "0.6" },
  { id: 16, path: "/work", element: <MyWork />, priority: "0.6" },
];
