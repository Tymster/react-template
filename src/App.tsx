import React from "react";
import "./output.css"
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Triangle } from "react-feather"
import NotFound from "./pages/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Triangle />
                <h1 className=" text-9xl">Fimshes</h1>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

const root = createRoot(document.getElementById("root")!)
root.render(<App />)