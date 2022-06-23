import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../containers/Home";
import ContextProvider from "../context/ContextProvider";
import "bootstrap/dist/css/bootstrap-grid.css";
import Detail from "../components/main/Detail";

function App() {
  return (
    <>
      <Router>
        <ContextProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </Layout>
        </ContextProvider>
      </Router>
    </>
  );
}

export default App;
