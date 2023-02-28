import './App.css';
import countryImg from "./assets/country-side-mobile.jpg";
import salmon from "./assets/salmon-mobile.jpg";
import filet from "./assets/filet-mignon-mobile.jpg"
import mousee from "./assets/mousee-mobile.jpg";
import family from "./assets/family-mobile.jpg";

function App() {
  return (
    <>
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

        <section id="menu-highlights" className="text-center px-6 bg-black text-white pb-28 pt-24">
          <div className="divider max-w-[76px] mx-auto mb-9">
            <span className="rounded-full bg-primary_beaver h-4 w-4 d block relative 
            before:content-[''] before:absolute before:h-[10px] before:w-[10px] before:bg-white before:rounded-full before:-mt-[0.3rem] before:-ml-[0.3rem] before:top-1/2 before:left-1/2
            after:content-[''] after:w-[56px] after:h-[2px] after:bg-primary_beaver after:absolute after:block after:top-1/2 after:left-8"
            ></span>
          </div>
          <h2 className="text-4xl font-bold mb-4">A few highlights from our menu</h2>
          <p className="leading-7 mb-24">We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season</p>

          <div className="menu-card mb-6 not-last:border-b-2 not-last:border-[hsla(0,0%,59%,0.25)]">
            <img src={salmon} alt="" className="mb-9"/>
            <h3 className="text-xl font-bold leading-7">Seared Salmon Fillet</h3>
            <p className="pb-14">Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
          </div>
          <div className="menu-card mb-6 not-last:border-b-2 not-last:border-[hsla(0,0%,59%,0.25)]">
            <img src={filet} alt="" className="mb-9"/>
            <h3 className="text-xl font-bold leading-7">Rosemary Filet Mignon</h3>
            <p className="pb-14">Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
          </div>
          <div className="menu-card mb-6 not-last:border-b-2 not-last:border-[hsla(0,0%,59%,0.25)]">
            <img src={mousee} alt="" className="mb-9"/>
            <h3 className="text-xl font-bold leading-7">Summer Fruit Chocolate Mousse</h3>
            <p className="not-last:pb-14">Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
          </div>
        </section>

        <section id="family-gathering" className="px-6 pt-14 text-center mb-32">
          <img src={family} alt="" className="mb-8"/>
          <div className="content">
            <ul className="mb-7">
              <li className="font-semibold">FAMILTY GATHERING</li>
              <li className="font-semibold">SPECIAL EVENTS</li>
              <li className="font-semibold">SOCIAL EVENTS</li>
            </ul>
            <h2 className="text-3xl font-bold">Family Gathering</h2>
            <p className="mb-7">We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We'll provide a memorable experience for all.</p>
            <button className="text-lg font-semibold border-2 border-white py-7 px-14 bg-black text-white">BOOK A TABLE</button>
          </div>
        </section>

        <section id="cta" className="text-center px-6">
          <p className="text-3xl font-bold mb-6">Ready to make a reservation?</p>
          <button className="text-lg font-semibold border-2 border-black py-7 px-14 bg-transparent">BOOK A TABLE</button>
        </section>
      </main>
      <footer id="footer">
        <h1>dine</h1>
        <address>
          MARTHWAITE, SEDBERGH<br/>
        </address>
      </footer>
    </>
  );
}

export default App;
