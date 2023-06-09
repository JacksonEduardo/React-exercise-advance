import { useGlobalContext } from "./context";
import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screen/homeScreen";
import AboutScreen from "./screen/aboutScreen";
import ContactScreen from "./screen/contactScreen";
import SingleCocktailScreen from "./screen/singleCocktailScreen";
import ErrorScreen from "./screen/errorScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contattaci" element={<ContactScreen />} />
        <Route path="/cocktail/:id" element={<SingleCocktailScreen />} />
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
