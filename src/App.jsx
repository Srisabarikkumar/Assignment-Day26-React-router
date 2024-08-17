import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import All from "./pages/All";
import Career from "./pages/Career";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<All />} />
          <Route path="fullstack-development" element={<FullStackDevelopment />} />
          <Route path="data-science" element={<DataScience />} />
          <Route path="cyber-security" element={<CyberSecurity />} />
          <Route path="career" element={<Career />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
