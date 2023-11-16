import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeAdd from "./components/RecipeAdd";
import RecipeSearch from "./components/RecipeSearch";
import RecipeDelete from "./components/RecipeDelete";
import ReecipeView from "./components/ReecipeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RecipeAdd />}></Route>
        <Route path="search" element={<RecipeSearch />}></Route>
        <Route path="delete" element={<RecipeDelete />}></Route>
        <Route path="view" element={<ReecipeView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
