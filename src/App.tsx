import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppRouteProviders from "./components/AppRouteProviders";
import { Bookmarks, Home, NotFound, Search } from "./pages";
import { Layout } from "./modules/layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppRouteProviders />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="bookmarks" element={<Bookmarks />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
