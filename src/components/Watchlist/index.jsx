import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../Card";
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <Header />
      <section className="container ">
        <div className="row">
          <h2>My Watchlist</h2>
        </div>
        {watchlist.length > 0 ? (
          <div className="row mt-4">
            {watchlist.map((item) => {
              return (
                <div className="grid-4 card p-0">
                  <Card key={item.id} content={item} type="watchlist" />
                </div>
              );
            })}
          </div>
        ) : (
          <h2>Nenhum Filme na sua lista, adicione algum.</h2>
        )}
      </section>
      <Footer />
    </>
  );
};
