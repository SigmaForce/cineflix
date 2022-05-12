import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

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
    console.log(email, password);
    e.preventDefault();
    try {
      await auth.authenticate(email, password);
      navigate("/");
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
                placeholder="Digite seu usuário"
                onChange={onChangeEmail}
              />
              <input
                type="password"
                name="password"
                className="mt-2 text-slate-900"
                placeholder="Digite sua senha"
                onChange={onChangePassword}
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
