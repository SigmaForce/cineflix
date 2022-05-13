import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { userApi } from "../../services/api";

const Register = () => {
  // const auth = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateNsc, setDateNsc] = useState("");
  const navigate = useNavigate();

  function onChangeNome(event) {
    setNome(event.target.value);
  }

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangeDate(event) {
    setDateNsc(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  async function onSubmitForm(e) {
    e.preventDefault();
    try {
      const response = await userApi.post("register", { email, password });
      if (response) {
        window.confirm("Usuario criado com sucesso");
        navigate("/");
      }
    } catch (error) {
      if (dateNsc === "" || email === "" || password === "" || nome === "") {
        alert("Preencha Todos os campos");
      } else {
        console.log(email);
        alert("Problema no Cadastro tente novamente mais tarde!");
      }
    }
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h5 className="text-center">Preencha os campos.</h5>

            <form onSubmit={onSubmitForm}>
              <input
                type="text"
                name="Nome"
                className="mt-3 text-slate-900"
                placeholder="Informe seu nome"
                onChange={onChangeNome}
              />
              <input
                type="text"
                name="email"
                className="mt-3 text-slate-900"
                placeholder="Digite seu email   "
                onChange={onChangeEmail}
              />
              <input
                type="password"
                name="password"
                className="mt-2 text-slate-900"
                placeholder="Digite sua senha"
                onChange={onChangePassword}
              />
              <input
                type="date"
                name="dtNasc"
                className="mt-2 text-slate-900"
                onChange={onChangeDate}
              />
              <div className="row mt-2">
                <span className="p1 text-zinc-100">
                  Já Possui uma Conta? &nbsp;
                </span>
                <Link to="/" className="link">
                  Faça o Login
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

export default Register;
