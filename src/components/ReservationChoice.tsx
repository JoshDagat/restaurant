import { IChoice } from '../constants/choices'
import { IReservationChoicesProps } from './ReservationChoices'

type IReservationProps = IChoice & IReservationChoicesProps

const activeLinkClasses:string = `
  text-slate-900 after:content-[''] after:border-primary_beaver after:border-b-2 after:absolute after:bottom-0 after:left-1/2
  after:w-1/4 after:block after:-ml-[12.5%]
` 
const inactiveLinkClasses:string = "text-slate-400" 

const ReservationChoice = ({id, value, imgSlug, active, setActive, setSlug}:IReservationProps) => {
  
  const handleClick = () => {
    setActive(id)
    setSlug(imgSlug)
  }
  
  
  return (
    <li className={`max-w-[186px] mx-auto font-semibold uppercase relative mb-4 last:mb-7 ${active === id ? activeLinkClasses:inactiveLinkClasses }`} onClick={handleClick}>{value}</li>
  )
}

export default ReservationChoice