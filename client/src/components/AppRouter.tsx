import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayer from "./Layout/MainLayer";
import HomePage from "../pages/HomePage";
import Sample from "../pages/Sample";
import Samples from "../pages/Samples";
import Section from "../pages/Section";
import Sections from "../pages/Sections";
import SampleAnalysis from "../pages/SampleAnalysis";
import SectionAnalysis from "../pages/SectionAnalysis";
import Analyzes from "../pages/Analyzes";
import Book from "../pages/Book";
import Books from "../pages/Books";
import Noway from "../pages/Noway";
import Authors from "../pages/Authors";
import Tags from "../pages/Tags";
import Minerals from "../pages/Minerals";
import Textures from "../pages/Textures";
import Structures from "../pages/Structures";
import Substances from "../pages/Substances";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayer />}>
          <Route path="/" element={<HomePage />} />
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
            <Route path="sampleAnalysis/:id" element={<SampleAnalysis />} />
            <Route path="sectionAnalysis/:id" element={<SectionAnalysis />} />
          </Route>
          <Route path="books">
            <Route path="" element={<Books />} />
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="authors/:id" element={<Authors />} />
          <Route path="tags/:id" element={<Tags />} />
          <Route path="minerals/:id" element={<Minerals />} />
          <Route path="textures/:id" element={<Textures />} />
          <Route path="structures/:id" element={<Structures />} />
          <Route path="substances/:id" element={<Substances />} />
          <Route path="*" element={<Noway />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
