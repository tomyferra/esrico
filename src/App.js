import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyPage from "./components/BodyPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <BodyPage />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
