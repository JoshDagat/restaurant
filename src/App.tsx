import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Highlights from './components/Highlights';
import Choices from './components/Choices';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main className='min-h-screen w-full font-league_spartan mx-auto'>
        <Hero/>
        <Features/>
        <Highlights/>
        <Choices/>
        <CTA/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
