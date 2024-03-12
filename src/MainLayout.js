import NavBar from "./components/Navbar";
import ViewTransactions from "./components/ViewTransactions";
import UserPage from "./components/UserPage";
import { BrowserRouter as Router, Rou, Route, Routes } from "react-router-dom";

import LessonPage from "./components/LessonPage";


function MainLayout() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact
         path ="/account/:index"
        element={<UserPage />} />
        <Route
          exact
          path="/transactions/:index"
          element={<ViewTransactions />}
        />
       
        <Route path ="/lessonpage/:index" element={<LessonPage />}/>
         
      </Routes>
      
    </div>
  );
}

export default MainLayout;