import { useAuth } from "../../contexts/AuthProvider/useAuth";

export const ProtectedLayout = ({ children }) => {
  const auth = useAuth();
  if (!auth.email) {
    return <h1>You dont Have acess</h1>;
  }
  return children;
};
