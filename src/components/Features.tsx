import { ReactElement } from "react"
import { features, IFeature } from "../constants/features"
import FeatureCard from "./FeatureCard"

const featuredCards = features.map((feature:IFeature):ReactElement => {
    return (
        <FeatureCard key={feature.id} {...feature}/>
    )
})

const Features = () => {
  return (
    <section id="features" className="px-6 text-center">
        {featuredCards}
    </section>
  )
}

export default Features