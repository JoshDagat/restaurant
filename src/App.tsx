import './App.css';
import countryImg from "./assets/country-side-mobile.jpg"

function App() {
  return (
    <main className='min-h-screen w-full font-league_spartan mx-auto'>
      <section id="hero" className='h-screen flex flex-col w-full mx-auto bg-black '>
        <div className="hero_background bg-hero_mobile bg-contain bg-no-repeat bg-top md:bg-hero_desktop md:bg-[right_top] h-full w-full max-h-[220px]"></div>
        <div className="hero__contents text-white w-full px-6 text-center">
          <h1 className="text-5xl font-semibold mb-9">dine</h1>
          <p className="font-light text-4xl leading-10 max-w-[80%] mx-auto mb-6">Exquisite dining since 1989</p>
          <p className="text-base leading-7 mb-14">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
          <button className="text-lg font-semibold border-2 border-white py-7 px-14">BOOK A TABLE</button>
        </div>
      </section>

      <section id="features" className='px-6 text-center'>
        <div className="feature-card mb-28">
          {/* <div className="feature-image"></div> */}
          <div className="feature-details">
            <img src={countryImg} alt="" className='clip-test mb-12'/>
            <div className="divider max-w-[76px] mx-auto mb-9">
              <span className="rounded-full bg-primary_beaver h-4 w-4 d block relative 
              before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:bg-white before:rounded-full before:-mt-[0.3rem] before:-ml-[0.3rem] before:top-1/2 before:left-1/2
              after:content-[''] after:w-[56px] after:h-[2px] after:bg-primary_beaver after:absolute after:block after:top-1/2 after:left-8"
              ></span>
            </div>
            <h2 className="text-4xl font-bold tracking-wide mb-4">Enjoyable place for all the family</h2>
            <p className="leading-7">Our relaxed surroundings make dining with us a greate experience for everyone. We can even arrange a tour of the farm before your meal</p>
          </div>
        </div>

        <div className="feature-card mb-28">
          {/* <div className="feature-image"></div> */}
          <div className="feature-details">
            <img src={countryImg} alt="" className='clip-test mb-12'/>
            <div className="divider max-w-[76px] mx-auto mb-9">
              <span className="rounded-full bg-primary_beaver h-4 w-4 d block relative 
              before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:bg-white before:rounded-full before:-mt-[0.3rem] before:-ml-[0.3rem] before:top-1/2 before:left-1/2
              after:content-[''] after:w-[56px] after:h-[2px] after:bg-primary_beaver after:absolute after:block after:top-1/2 after:left-8"
              ></span>
            </div>
            <h2 className="text-4xl font-bold tracking-wide mb-4">The most locally sourced food</h2>
            <p className="leading-7">All our ingredients come directly from our farm or local fishery. So you can be sure that you're eating the freshest, most sustainable food.</p>
          </div>
        </div>
      </section>

      <section id="menu-highlights">
        <div className="divider max-w-[76px] mx-auto mb-9">
          <span className="rounded-full bg-primary_beaver h-4 w-4 d block relative 
          before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:bg-white before:rounded-full before:-mt-[0.3rem] before:-ml-[0.3rem] before:top-1/2 before:left-1/2
          after:content-[''] after:w-[56px] after:h-[2px] after:bg-primary_beaver after:absolute after:block after:top-1/2 after:left-8"
          ></span>
        </div>
        <h2>A few highlights from our menu</h2>
        <p></p>
      </section>
    </main>
  );
}

export default App;
