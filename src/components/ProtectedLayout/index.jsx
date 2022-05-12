import { useAuth } from "../../contexts/AuthProvider/useAuth";
import { Link} from "react-router-dom";
export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  if (!auth.email) {
    return (
      <>
       <section className="container  p-4" >
        <div className="row">
          <div className="grid-3 p-0 disappear"></div>
          <div className="grid-6 flex-center"><h4 className="text-center">Você não tem Permissão, Faça o Login ou Cadastre-se para continuar.</h4></div>
          <div className="grid-3  p-0 disappear"></div>
        </div>
        <div className="row">
          <div className="grid-3 p-0 disappear"></div>
            <div className="grid-6 flex-center gap-10">
              <Link to="/" className="link">
                Fazer Login
              </Link>
              <Link to="/register" className="link">
                Cadastrar
              </Link>
            </div>
          <div className="grid-3 p-0 disappear"></div>
        </div>
      </section>
      </>
 
    )
  }
  return children;
};
