import nlwUniteIcon from "../../assets/nlw-unite-icon.svg"
import Links from "../Links/Links"

export default function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="Logo nlw" />
      
      <nav className=" flex items-center gap-5  ">
      <Links href="/" >Events</Links>
      <Links href="/"  >Attendee</Links>
      {/* <a href="" className="font-medium text-sm">Attendee</a> */}
      </nav>
    </div>
  )
}
