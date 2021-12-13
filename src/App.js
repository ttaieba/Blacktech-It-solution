import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
import Home from './Pages/HOme/Home';
import Navigation from "./Pages/Shared/Navbar/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
