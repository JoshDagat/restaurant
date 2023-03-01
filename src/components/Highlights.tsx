import { ReactElement } from "react";
import { highlights, IHighlights } from "../constants/highlights";
import Divider from "./Divider";
import HighlightCard from "./HighlightCard";

const highlighted = highlights.map((item: IHighlights):ReactElement => {
  return (
    <HighlightCard key={item.id} {...item}/>
  )
})

const Highlights = () => {
  return (
    <section id="menu-highlights" className="text-center px-6 bg-black text-white pb-28 pt-24">
      <Divider/>
      <h2 className="text-4xl font-bold mb-4">A few highlights from our menu</h2>
      <p className="leading-7 mb-24">We cater for all dietary requirements, but here's a glimpse at some of our diner's favourites. Our menu is revamped every season</p>
      {highlighted}
    </section>
  )
}

export default Highlights