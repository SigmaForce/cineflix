import Card from "../../components/Card";

import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import Header from "../../components/Header";

const Search = () => {
  const { word_search } = useParams();
  const [search, setSearch] = useState([]);
  const [form, setForm] = useState([]);
  const [word, setWord] = useState(word_search);

  useEffect(() => {
    if (word) {
      api
        .get(
          `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&query=${word}&page=1&include_adult=false`
        )
        .then((response) => {
          console.log(response.data.results);

          setSearch(response.data.results);
        });
    }
  }, [word]);

  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  }
  function handleSearch(e) {
    e.preventDefault();
    setWord(form.search);
  }

  return (
    <>
      <Header />
      <section className="container">
        <h6 className="uppercase color-primary text-center">
          {search.length} resultados
        </h6>
        <h4 className="text-center"> "{word}" </h4>
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="grid-2 disappear"></div>
            <div className="grid-8 flex-center">
              <input
                className=" text-slate-900"
                type="text"
                name="search"
                placeholder="Buscar..."
                onChange={onChange}
              ></input>
              <button className="btn ml-2">Buscar</button>
            </div>
            <div className="grid-2 disappear"></div>
          </div>
        </form>
        <div className="row mt-4">
          {search.map((item) => {
            return <Card key={item.id} content={item} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Search;
