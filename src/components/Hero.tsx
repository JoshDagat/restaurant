const Hero = () => {
  return (
    <section id="hero" className='min-h-screen flex flex-col w-full mx-auto bg-black'>
          <div className="min-h-[200px] hero_background bg-hero_mobile bg-cover bg-no-repeat bg-top md:bg-hero_desktop md:bg-[right_top] h-full w-full max-h-[220px]"></div>
          <div className="hero__contents text-white w-full text-center px-6">
            <h1 className="text-5xl font-semibold mb-9 mt-6">dine</h1>
            <p className="font-light text-4xl leading-10 max-w-[80%] mx-auto mb-6">Exquisite dining since 1989</p>
            <p className="text-base leading-7 mb-14">Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
            <button className="text-lg font-semibold border-2 border-white py-7 px-14">BOOK A TABLE</button>
          </div>
        </section>
  )
}

export default Hero