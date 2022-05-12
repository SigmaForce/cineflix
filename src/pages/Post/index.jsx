import { Link, useParams } from "react-router-dom";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Post = () => {
  const { idMovie } = useParams();

  const [movie, setMovie] = useState([]);

  //console.log(idPost);

  useEffect(() => {
    if (idMovie) {
      api
        .get(
          `movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`
        )
        .then((response) => {
          setMovie(response.data);
          console.log(response.data);
        });
    }
  }, [idMovie]);

  return (
    <>
      <Header />
      <section className="container">
        <h3 className="text-center mb-3">{movie.original_title}</h3>

        <div className="img-banner hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
          />
        </div>

        <div className="row my-3">
          <h4>{movie.title} </h4>
          <p className="mt-1">{movie.overview}</p>
        </div>
        <div className="row my-3">
          <Link to={"/"} className="link color-primary">
            <span></span> Voltar
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Post;
