import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from './components/ContactUs';
function App() {
  return (
    <div className="App">
      <Header />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
