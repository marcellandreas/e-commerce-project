import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/common/Header";
import { Home, Layout } from "./router";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
