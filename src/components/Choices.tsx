import { useState } from "react";
import ReservationChoices from "./ReservationChoices";
import { choices, IChoice } from "../constants/choices";

const FamilyGathering = () => {
  const [slug, setSlug] = useState('family-mobile.jpg');
  const [active, setActive] = useState(1);

  const activeChoice = choices.find((choice:IChoice) => choice.id === active);
  console.log(activeChoice)

  return (
    <section id="family-gathering" className="px-6 pt-14 text-center mb-32">
          <img src={require(`../assets/${slug}`)} alt="" className="mb-8 mx-auto object-cover"/>
          <div className="content">
            <ReservationChoices active={active} setActive={setActive} setSlug={setSlug}/>
            <h2 className="text-3xl font-bold">{activeChoice?.value}</h2>
            <p className="mb-7">{activeChoice?.description}</p>
            <button className="text-lg font-semibold border-2 border-white py-7 px-14 bg-black text-white">BOOK A TABLE</button>
          </div>
        </section>
  )
}

export default FamilyGathering