
import './App.css';
// import Footer from './Component/Footer';
import LandingPage from './Component/LandingPage';
import Nav from './Component/Nav';
import Top from './Component/Top';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Top/>
    <LandingPage/>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
