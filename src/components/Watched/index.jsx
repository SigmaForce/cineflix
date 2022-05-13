import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";
import Card from "../Card";
import Footer from "../Footer";
import Header from "../Header";

const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <section className="container ">
        <div className="row">
          <h2>Filmes Assistidos</h2>
        </div>
        {watched.length > 0 ? (
          <div className="row mt-4">
            {watched.map((item) => {
              return (
                <div className="grid-4 card p-0">
                  <Card key={item.id} content={item} type="watched" />
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

export default Watched;
