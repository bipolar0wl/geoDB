import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sample from "../pages/Sample";
import Samples from "../pages/Samples";
import Section from "../pages/Section";
import Sections from "../pages/Sections";
import Analysis from "../pages/Analysis";
import Analyzes from "../pages/Analyzes";
import Book from "../pages/Book";
import Books from "../pages/Books";
import Noway from "../pages/Noway";
import NavBar from "./NavBar";
import Body from "./Body";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      {/* <SideBar /> */}
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Main />} />
          <Route path="samples">
            <Route path="" element={<Samples />} />
            <Route path="post/:id" element={<Sample />} />
          </Route>
          <Route path="sections">
            <Route path=":id" element={<Sections />} />
            <Route path="post" element={<Section />} />
            <Route path="post/:id" element={<Section />} />
          </Route>
          <Route path="analyzes">
            <Route path="" element={<Analyzes />} />
            <Route path="post/:id" element={<Analysis />} />
          </Route>
          <Route path="books">
            <Route path="" element={<Books />} />
            <Route path=":page" element={<Books />} />
            <Route path="post" element={<Book />} />
            <Route path="post/:id" element={<Book />} />
          </Route>
          <Route path="*" element={<Noway />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
