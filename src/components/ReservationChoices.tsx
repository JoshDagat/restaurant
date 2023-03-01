import { ReactElement } from "react"
import { choices, IChoice } from "../constants/choices"
import ReservationChoice from "./ReservationChoice"

export type IReservationChoicesProps = {
  active: number,
  setActive: React.Dispatch<React.SetStateAction<number>>
  setSlug: React.Dispatch<React.SetStateAction<string>>
}
const ReservationChoices = ({active, setActive, setSlug}:IReservationChoicesProps) => {
  return (
    <ul className="mb-7">
      {
      
      choices.map(({id, value, imgSlug}:IChoice):ReactElement =>{
        return (
        <ReservationChoice 
          key={id} 
          id={id} 
          value={value} 
          imgSlug={imgSlug} 
          active={active} 
          setActive={setActive} 
          setSlug={setSlug}/>
        )
      })

      }
    </ul>
  )
}

export default ReservationChoices