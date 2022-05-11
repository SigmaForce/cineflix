import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { AuthContext } from "../../contexts/auth";

const LoginPage = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    login(email, password);
  };

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h5 className="text-center">Olá Faça o Login para continuar.</h5>

            <form>
              <input
                type="text"
                name="user"
                className="mt-3"
                placeholder="Digite seu usuário"
              />
              <input
                type="password"
                name="pasword"
                className="mt-2"
                placeholder="Digite sua senha"
              />
              <button className="btn w-100 mt-4">Entrar</button>
            </form>
          </div>
          <div className="grid-4 disappear"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LoginPage;
