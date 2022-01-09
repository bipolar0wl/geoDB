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
import NavBar from "./NavBar";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="samples">
            <Route path="" element={<Samples />} />
            <Route path=":id" element={<Sample />} />
          </Route>
          <Route path="sections">
            <Route path="" element={<Sections />} />
            <Route path=":id" element={<Section />} />
          </Route>
          <Route path="analyzes">
            <Route path="" element={<Analyzes />} />
            <Route path=":id" element={<Analysis />} />
          </Route>
          <Route path="books">
            <Route path="" element={<Books />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
