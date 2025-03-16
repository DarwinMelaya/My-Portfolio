import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";

const App = () => {
  const [isRefreshed, setIsRefreshed] = useState(true);

  useEffect(() => {
    // Reset the refresh state when component unmounts
    return () => setIsRefreshed(false);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen />} />
        <Route
          path="/main"
          element={isRefreshed ? <Navigate to="/" /> : <Main />}
        />
      </Routes>
    </Router>
  );
};

export default App;
