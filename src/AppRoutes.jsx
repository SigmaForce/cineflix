import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import Search from "./pages/Search";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

import Post from "./pages/Post";
import Watched from "./components/Watched";
import { Watchlist } from "./components/Watchlist";
import { GlobalProvider } from "./contexts/GlobalState";
import { AuthProvider } from "./contexts/AuthProvider";
import { ProtectedLayout } from "./components/ProtectedLayout";
import Register from "./pages/Register";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />}></Route>
            <Route
              exact
              path="/home"
              element={
                <ProtectedLayout>
                  <Home />
                </ProtectedLayout>
              }
            ></Route>
            <Route
              exact
              path="/search/:word_search"
              element={
                <ProtectedLayout>
                  <Search />
                </ProtectedLayout>
              }
            ></Route>
            <Route path="/post/:idMovie" element={<Post />} />
            <Route
              path="/watched"
              element={
                <ProtectedLayout>
                  <Watched />{" "}
                </ProtectedLayout>
              }
            />
            <Route
              path="/watchlist"
              element={
                <ProtectedLayout>
                  <Watchlist />
                </ProtectedLayout>
              }
            />
            <Route
              path="/register"
              element={

                  <Register />

              }
            />
          </Routes>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default AppRoutes;
