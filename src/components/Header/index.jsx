import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const initialValueForm = {
    search: "",
  };
  const [form, setForm] = useState(initialValueForm);
  const navigate = useNavigate();
  function onChange(event) {
    const { value, name } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  }

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search/${form.search}`);
  }
  return (
    <>
      <header className="px-2 py-1">
        <nav>
          <div className="logo">
            <Link to="/">
              <h3 className="px-2 mr-4">Logo</h3>
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about" href="">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact">Contato</Link>
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
          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile">
            <Link to="/login" className="link color-primary">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
            </li>
            <li className="py-2 px-2">
              <form className="flex">
                <input type="text" name="search" placeholder="Buscar..." />
                <button className="btn-search"></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
