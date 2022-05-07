import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
  };

  return (
    <div className="flex flex-col content-center items-center justify-center mx-auto min-h-[60vh] max-w-xl bg-zinc-900 mt-12 rounded-md">
      <h1 className="mb-4 text-5xl font-bold"> Login do sistema</h1>
      <form className="w-full max-w-[480px] p-2 " onSubmit={handleSubmit}>
        <div className="mt-3">
          <label className="text-slate-100 text-lg" htmlFor="email">
            Email
          </label>
          <input
            className="w-full h-8 rounded-md text-slate-900"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <label className="text-slate-100 text-lg " htmlFor="password">
            Senha
          </label>
          <input
            className="w-full h-8 rounded-md text-slate-900"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="w-full p-2 mt-5 bg-brand-500 rounded-md border-transparent flex justify-center items-center text-xl hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
