import AttendeeList from "./components/AttendeeList/attendee-list"
import Header from "./components/Header/Header"

export function App() {

  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col">
      <Header />
      <AttendeeList/>
    </div>
  )
}

