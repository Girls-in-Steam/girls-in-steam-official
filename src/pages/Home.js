import './styles/Home.css';
import Navbar from './components/Navbar.js'
import AboutUs from "./components/AboutUs";
import SupportUs from "./components/SupportUs";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <AboutUs />
        <SupportUs />
      </header>
    </div>
  );
}

export default Home;
