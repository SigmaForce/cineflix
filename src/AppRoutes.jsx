import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import { AuthProvider } from "./contexts/auth";
import Post from "./pages/Post";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/search/:word_search" element={<Search />}></Route>
          <Route path="/post/:idMovie" element={<Post />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
