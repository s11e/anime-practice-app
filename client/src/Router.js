import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AddAnime from "./pages/AddAnime";
import MovieDetails from "./pages/MovieDetails";

export default function Router() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addanime" element={<AddAnime />} />
          <Route path="/:movieId" element={<MovieDetails />} />
        </Routes>
    </div>
  )
}
