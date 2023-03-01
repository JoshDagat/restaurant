import ctaIMG from "../assets/reservation-bg-mobile.jpg"

// text-white bg-no-repeat bg-[position:54%_52%]
//     relative
//     after:content-['']
//     after:absolute
//     after:top-0
//     after:left-0
//     after:w-full
//     after:h-full
//     after:bg-gray-200
//     after:opacity-50
//     after:-z-10

const CTA = () => {
  return (
    <section id="cta" className="text-center px-6  py-24 text-white relative
    after:content-['']
    after:bg-[url('/src/assets/reservation-bg-mobile.jpg')]
    after:absolute
    after:h-full
    after:w-full
    after:top-0
    after:left-0
    after:-z-20
    before:content-['']
    before:absolute
    before:h-full
    before:w-full
    before:top-0
    before:left-0
    before:-z-10
    before:bg-gray-900
    before:bg-opacity-50
    "
    style={{background: ctaIMG}}
    >
        <p className="text-3xl font-bold mb-6">Ready to make a reservation?</p>
        <button className="text-lg font-semibold border-2 border-black py-7 px-14 bg-transparent">BOOK A TABLE</button>
    </section>
  )
}

export default CTA