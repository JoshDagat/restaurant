import './App.css';
import countryImg from "./assets/country-side-mobile.jpg"

function App() {
  return (
    <main className='min-h-screen w-full font-league_spartan mx-auto'>
      <section id="hero" className='h-screen flex flex-col w-full mx-auto bg-black '>
        <div className="hero_background bg-hero_mobile bg-contain bg-no-repeat bg-[right_top] md:bg-hero_desktop md:bg-[right_top] bg-fixed h-full w-full max-h-[220px]"></div>
        <div className="hero__contents text-white w-full px-6 text-center">
          <h1 className="text-5xl font-semibold mb-9">dine</h1>
          <p className="font-light text-4xl leading-10 max-w-[80%] mx-auto mb-6">Exquisite dining since 1989</p>
          <p className="text-base leading-7 mb-14">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <button className="text-lg font-semibold border-2 border-white py-7 px-14">BOOK A TABLE</button>
        </div>
      </section>

      <section id="features" className='px-6'>
        <div className="feature-card">
          {/* <div className="feature-image"></div> */}
          <div className="feature-details">
            <img src={countryImg} alt="" />
            <h2>Enjoyable place for all the family</h2>
            <p>Our relaxed surroundings make dining with us a greate experience for everyone. We can even arrange a tour of the farm before your meal</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
