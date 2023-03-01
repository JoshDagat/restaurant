import Divider from "./Divider";
import { IFeature } from "../constants/features";

const FeatureCard = ({header, description, bg}:IFeature) => {
  return (
    <div className="feature-card mb-28 first:-mt-20">
        <div className="feature-details">
            <div className={
              `feature-img-div min-h-[400px] h-full bg-${bg} bg-[size:160%] bg-no-repeat bg-[position:50%_65%] mb-12`}
              ></div>
            <Divider/>
            <h2 className="text-3xl font-bold tracking-wide mb-4">{header}</h2>
            <p className="leading-7">{description}</p>
        </div>
    </div>
  )
}

export default FeatureCard