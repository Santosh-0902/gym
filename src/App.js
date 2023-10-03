
import './App.css';
import Hero from './components/Hero/Hero';
import Program from './components/Programs/Program';
import Reason from './components/Reason/Reason';
import Plan from './components/Plan/Plan';
import Testimonial from './components/testimonial/Testimonial';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Hero/>
    <Program/>
    <Reason/>
    <Plan/>
    <Testimonial/>
    <Join/>
    <Footer/>
    </div>
  );
}

export default App;
