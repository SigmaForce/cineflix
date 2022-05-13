import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      await auth.authenticate(email, password);
      navigate("/home");
    } catch (error) {
      alert("Invalid Email or Password");
    }
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h5 className="text-center">Olá Faça o Login para continuar.</h5>

            <form onSubmit={onSubmitForm}>
              <input
                type="text"
                name="email"
                className="mt-3 text-slate-900"
                placeholder="Digite seu email"
                onChange={onChangeEmail}
              />
              <input
                type="password"
                name="password"
                className="mt-2 text-slate-900"
                placeholder="Digite sua senha"
                onChange={onChangePassword}
              />
              <div className="row mt-2">
                <span className="p1 text-zinc-100">
                  {" "}
                  Não tem uma Conta? &nbsp;
                </span>
                <Link to="/register" className="link">
                  Registre-se
                </Link>
              </div>
              <button className="btn w-100 mt-1">Entrar</button>
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
