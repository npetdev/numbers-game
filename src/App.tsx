import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import MainLayout from "./layouts/MainLayout";
import AboutGamePage from "./pages/AboutGamePage";
import BestScoresPage from "./pages/BestScoresPage";
import GamePage from "./pages/GamePage";
import LogInPage from "./pages/LogInPage";
import LogOutPage from "./pages/LogOutPage";
import SignUpPage from "./pages/SignUpPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<GamePage />} />
          <Route path="aboutgame" element={<AboutGamePage />} />
          <Route path="bestscores" element={<BestScoresPage />} />
          <Route path="login" element={<LogInPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="logout" element={<LogOutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
