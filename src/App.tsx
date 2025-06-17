import Layout from "@/components/layout/Layout";
import About from "@/components/pages/About";
import DownloadApp from "@/components/pages/DownloadApp";
import PrivacyPolicy from "@/components/pages/PrivacyPolicy";
import TermsAndConditions from "@/components/pages/TermsAndConditions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/download" element={<DownloadApp />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
