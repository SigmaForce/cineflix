import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import { AuthProvider } from "./contexts/auth";
import Post from "./pages/Post";
import Watched from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { GlobalProvider } from "./contexts/GlobalState";

const AppRoutes = () => {
  return (
    <GlobalProvider>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/login" element={<LoginPage />}></Route>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/search/:word_search"
              element={<Search />}
            ></Route>
            <Route path="/post/:idMovie" element={<Post />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </AuthProvider>
      </Router>
    </GlobalProvider>
  );
};

export default AppRoutes;
