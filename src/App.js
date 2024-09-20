import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainFormPage from "./pages/MainFormPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainFormPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
