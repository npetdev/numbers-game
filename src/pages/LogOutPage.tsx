import { useAuth } from "../hooks/useAuth";
const LogOut:React.FC = () => {
  const { logout } = useAuth();
  return (
    <button style={{ marginBottom: "20px" }} onClick={logout}>
     LogOut
    </button>
  );
};

export default LogOut;
