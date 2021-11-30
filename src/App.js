// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Services from './components/Services'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <ContactUs />
      <Footer />

    </>
  );
}

export default App;
