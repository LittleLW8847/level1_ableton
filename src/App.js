import logo from './logo.svg';
import './App.css';
import Navbar1 from './compnent/Navbar1';
import Navbar2 from './compnent/Navbar2';
import navbarContainer from './compnent/navbarcontainer';
import Header from './compnent/header';
import AboutText from './compnent/AboutText';
function App() {
  return (
    <div class="ml-44">
      <Navbar1/>
      <Navbar2/>
      <Header/>
      <AboutText/>
    </div>
    
  );
}

export default App;
