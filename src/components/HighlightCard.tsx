import { IHighlights } from "../constants/highlights"

const HighlightCard = ({name, description, imgSlug}:IHighlights) => {
  return (
    <div className="menu-card mb-6 not-last:border-b-2 not-last:border-[hsla(0,0%,59%,0.25)]">
      <img src={require(`../assets/${imgSlug}`)} alt="" className="mb-9"/>
      <h3 className="text-xl font-bold leading-7">{name}</h3>
      <p className="pb-14">{description}</p>
    </div>
  )
}

export default HighlightCard