import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const pages = [
  { id: "home", title: "Home", component: Home },
  { id: "projects", title: "Projects", component: Projects },
  { id: "skills", title: "Skills", component: Skills },
  { id: "contact", title: "Contact", component: Contact },
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <Layout>
      <div className="w-full max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <CurrentPageComponent key={currentPage} />
        </AnimatePresence>

        <Navigation
          currentPage={currentPage}
          totalPages={pages.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </Layout>
  );
}

export default App;
