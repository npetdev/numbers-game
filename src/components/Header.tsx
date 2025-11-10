import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.scss";
import { useAuth } from "../hooks/useAuth";
const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">🎲 DiceGame</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/aboutgame">About Game</Link>
          </li>
          <li>
            <Link to="/bestscores">Best Scores</Link>
          </li>

          <li>
            <Link to="/login">{user ? "LogOut" : "Login"}</Link>
          </li>
          {!user && (
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
