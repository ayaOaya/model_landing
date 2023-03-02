import Navbar  from  "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Featured from "./components/Featured";
import CustomCursor from "./CustomCursor";
import './App.css';

function App() {
  return (
    <>
    <CustomCursor />
    
    <div>
    <Navbar />
    <Header />
    <Featured />
    <Footer />
    </div>
    </>
  );
}

export default App;
