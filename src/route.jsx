import Gallery from "./Components/swiper/Gallery";
import MyWork from "./pages/MyWork/MyWork";
import { Basket, Catalog, CatalogDetail, Category, Contact, EditProductImg, Main, NewsAndUseful, NewsComp, Onas, Product, SubCategory, WeNews } from "./pages/User";
import { Login } from "./pages/login/Login";
import Work from "./pages/work/work";

export const routes = [
  { id: 1, path: "/", element: <Main /> },
  { id: 2, path: "/about-us", element: <Onas /> },
  { id: 3, path: "/new/:id", element: <NewsAndUseful /> },
  { id: 4, path: "/new", element: <WeNews /> },
  { id: 5, path: "/basket", element: <Basket /> },
  { id: 6, path: "/catalog", element: <Catalog /> },
  { id: 7, path: "/catalog/:id/:slug", element: <CatalogDetail /> },
  { id: 8, path: "/contact", element: <Contact /> },
  { id: 9, path: "/category", element: <Category /> },
  { id: 10, path: "/login", element: <Login /> },
  { id: 11, path: "/product", element: <Product /> },
  { id: 12, path: "/sub-category", element: <SubCategory /> },
  { id: 13, path: "/news", element: <NewsComp /> },
  { id: 14, path: "/edit-image/:id", element: <EditProductImg /> },
  { id: 15, path: '/work-cat', element: <Work />},
  { id: 16, path: '/work', element: <MyWork />},
  // { id: 17, path: '/gal', element: <Gallery />}
];
