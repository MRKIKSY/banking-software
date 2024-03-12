import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import LessonPage from "./components/LessonPage";





function App() {

  return (
  

    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route path="*" element={<MainLayout />} />
          <Route path="*" element={<LessonPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
