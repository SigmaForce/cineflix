import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const Register = () => {
 // const auth = useAuth();
  const [nome, setNome] = useState("")
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

  function onChangeDate(event){
    setDateNsc(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  async function onSubmitForm(e) {
    e.preventDefault();
    console.log(nome, email, password, dateNsc)
  }

  return (
    <>
      <Header />
      <section className="container">
        <div className="row">
          <div className="grid-4 disappear"></div>
          <div className="grid-4">
            <h5 className="text-center">Preencha os campos para criar uma conta.</h5>

            <form onSubmit={
                onSubmitForm
            }>
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

export default Register;
