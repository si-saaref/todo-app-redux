import { BrowserRouter, Route, Routes } from "react-router-dom";
import SplashPage from "./component/pages/SplashPage";
import TodoPage from "./component/pages/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SplashPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
