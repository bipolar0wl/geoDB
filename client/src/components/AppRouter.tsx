import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Minerals from "../pages/Minerals";
import Sections from "../pages/Sections";
import Books from "../pages/Books";
import Book from "../pages/Book";
import NavBar from "./NavBar";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavBar />}>
                    <Route path="minerals" element={<Minerals />} />
                    <Route path="sections" element={<Sections />} />
                    <Route path="books" element={<Books />}>
                        <Route
                            index
                            element={
                                <main style={{ padding: "1rem" }}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":booksId" element={<Book />} />
                    </Route>
                    {/* <Route path="*" element={<Minerals />}></Route> */}
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
        </BrowserRouter>
    );
}
