import React from "react";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from "./Components/pages/landing";
import Event from "./Components/pages/event";
import Blog from "./Components/pages/blog";
import About from "./Components/pages/about";
import Distributor from "./Components/pages/distributor";
import Client from "./Components/pages/client";
import Full_blog from "./Components/pages/full_blog";
import Offers from "./Components/pages/offers";
import Buyer from "./Components/pages/buyer";
import ComingSoon from "./Components/pages/coming_soon";
import Privacy from "./Components/pages/privacy";
import Contest from "./Components/pages/contest";
import Term from "./Components/pages/term";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/event" element={<Event />} />
            <Route path="/" element={<Landing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/distributor" element={<Distributor />} />
            <Route path="/client" element={<Client />} />
            <Route path="/full-blog/:id" element={<Full_blog />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/client/buyer" element={<Buyer />} />
            <Route path="/comming-soon" element={<ComingSoon />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/contest-rules" element={<Contest />} />
            <Route path="/terms" element={<Term />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
