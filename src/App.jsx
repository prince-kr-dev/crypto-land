import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesTab from './components/FeaturesTab';
import StepsTab from './components/StepsTab';
import Team from './components/Team';
import TestimonialTab from './components/TestimonialTab';
import BlogTab from './components/BlogTab';
import Footer from './components/Footer';

function App(){
  return (
    <>
        <div>
          <Navbar/>
          <Hero/>
          <FeaturesTab/>
          <StepsTab/>
          <Team/>
          <TestimonialTab/>
          <BlogTab/>
          <Footer/>
        </div>
    </>
  );
}
  
export default App
