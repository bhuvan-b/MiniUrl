import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Shorten from "./components/Shorten";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Shorten />
      <Features />
      <Footer />
    </>
  );
}

export default App;
