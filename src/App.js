import { Provider } from "react-redux";
import { Route, Routes, HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import SplashPage from "./component/pages/SplashPage";
import TodoPage from "./component/pages/TodoPage";
import { persistor, store } from "./config/redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<SplashPage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
