import React from "react";
import { useAuth } from "../hooks/useAuth";

const LogOutPage: React.FC = () => {
  const { logout } = useAuth();
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <button onClick={logout}>LogOut</button>
    </div>
  );
};

export default LogOutPage;
