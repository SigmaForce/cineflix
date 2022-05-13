import Header from "../../components/Header";
import Footer from "../../components/Footer";

//Figuras
import star from "../../svg/icon-star.svg";
//API
import { api } from "../../services/api";
//HOOKS
import { useState, useEffect } from "react";
import Card from "../../components/Card";

const Home = () => {
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    //Requisição para Proximos Lançamentos
    api
      .get(
        `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`
      )
      .then((resp) => {
        setUpcoming(resp.data.results);
      });

    // Filmes Populares
    api
      .get(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`
      )
      .then((resp) => {
        setPopular(resp.data.results);
      });
  }, []);

  return (
    <>
      <Header />

      <section className="container">
        <div className="row">
          <div className="grid-2 "></div>
          <div className="grid-8 pt-5  pb-3">
            <img src={star} className="icon-l" alt="" />
            <h2 className="mt-1">
              Os melhores e mais assistidos filmes do mês.
            </h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              urna pharetra ut ac, pellentesque.
            </p>
          </div>
          <div className="grid-2 "></div>
        </div>
      </section>

      <section className="container">
        <h3 className="mx-2">Populares</h3>
        <p className="mx-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>
        <div className="row mt-4">
          {popular.map((item) => {
            return (
              <div className="grid-3 card p-0">
                <Card key={item.id} content={item} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="container">
        <h3 className="mx-2">Próximos Lançamentos</h3>
        <p className="mx-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare urna
          pharetra ut ac, pellentesque.
        </p>
        <div className="row mt-4">
          {upcoming.map((item) => {
            return (
              <div className="grid-3 card p-0">
                <Card key={item.id} content={item} />
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
