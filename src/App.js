import { React } from "react";
import Introduction from "./components/Content/Introduction";
import Header from "./components/Header/Header";
import Footer from "./components/Header/Footer";
import About from "./components/Content/About";
import Experience from "./components/Content/Experience";
import Project from "./components/Content/Project";

const App = () => {
  return (
    <div className="bg-sub-main dark:bg-main">
      <Header />
      <Introduction />
      <About />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
