import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

const Header = () => {
  const initialValueForm = {
    search: "",
  };
  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();
  const auth = useAuth();
  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  }

  function handleLogout() {
    auth.logout();
    navigate("/");
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${form.search}`);
  }
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div>
            <Link to="/home">
              <h3 className="px-2 mr-4">Logo</h3>
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/watchlist" href="">
                Minha Lista
              </Link>
            </li>
            <li>
              <Link to="/watched ">Assistidos</Link>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
            <form className="flex" onSubmit={handleSearch}>
              <input
                className="bg-[#151B26] "
                type="text"
                name="search"
                placeholder="Buscar Filmes..."
                onChange={onChange}
              />
              <button className="btn-search"></button>
            </form>
          </div>
          <div className="ml-3">
            {!auth.email ? (
              <Link to="/" className="btn min-w-[130px]  ">
                Login
              </Link>
            ) : (
              <button className="btn min-w-[130px]" onClick={handleLogout}>
                Sair
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
