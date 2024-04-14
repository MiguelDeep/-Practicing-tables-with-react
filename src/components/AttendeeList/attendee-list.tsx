import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import IconButton from "../IconButton/IconButton"
import Table from "../Table/table"
import TableHeader from "../Table/table-header"
import TableCell from "../Table/table-cell"
import { ChangeEvent, useEffect, useState } from "react"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import 'dayjs/locale/pt-br'
import { api } from "../../services/api"
import { attendeeTypes } from "../../types/ateendeType"



dayjs.extend(relativeTime)
dayjs.locale('pt-br')
export default function AttendeeList() {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [attendees, setAttendees] = useState<attendeeTypes[]>([])
  const [total,setTotal]= useState(0)
  const totalPages = Math.ceil(attendees.length / 10)

  useEffect(() => {
    fetch('http://localhost:3333/events/6b14c5cb-9740-4906-9e5c-f3e6ba628189/attendees').then((res) => res.json()).then(data => {
      setAttendees(data.attendees)
      console.log(totalPages)
    })
  }, [page])

  function goToNextPage() {
    setPage(page + 1)
  }
  function goToPrevPage() {

    setPage(page - 1)
  }
  function goToLastPage() {
    setPage(totalPages)
  }
  function goToFistPage() {
    if (page >= 0) {
      setPage(1)
    }

  }

  function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Attendee</h1>
        <div className="w-72  border border-white/10 px-3 py-1.5 rounded-lg text-sm flex items-center gap-3">
          <Search size={16} className="text-emerald-300" />
          <input
            type="text"
            placeholder="Search attendee..."
            className="flex-1 outline-none bg-transparent border-none p-0"
            onChange={onSearchInputChanged}
            value={search}
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input className="size-4 bg-black/20 border border-white/10 rounded-sm accent-slate-50" type="checkbox" />
            </TableHeader>
            <TableHeader >Código</TableHeader>
            <TableHeader >Participante</TableHeader>
            <TableHeader >Data de inscrição</TableHeader>
            <TableHeader >Data de check-in</TableHeader>
            <TableHeader style={{ width: 64 }} ></TableHeader>
          </tr>
        </thead>
        <tbody>
          {
            attendees.map((attendee) => {
              return (
                <tr key={attendee.id} className="border-b border-white/10   hover:bg-slate-400/5 ">
                  <TableCell>
                    <input className="size-4 bg-black/20 border border-white/10 rounded-sm " type="checkbox" name="" id="" />
                  </TableCell>
                  <TableCell>{attendee.id}</TableCell>
                  <TableCell className="flex flex-col text-sm gap-1">
                    <span className="font-semibold text-white">{attendee.name}</span>
                    <span>{attendee.email}</span>
                  </TableCell>
                  <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                  <TableCell>{attendee.checkedInAt === null ? <span className="text-zinc-400">Nao fez check-in</span> : dayjs().to(attendee.checkedInAt)}</TableCell>
                  <TableCell>
                    <IconButton transparent={true}>
                      <MoreHorizontal size={16} />
                    </IconButton>
                  </TableCell>
                </tr>
              )
            })
          }
        </tbody>
        <tfoot>
          <tr >
            <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Showing {page} of {attendees.length} items
            </TableCell>
            <TableCell className="text-right gap-8" colSpan={3}>
              <div className="inline-flex items-center gap-2">
                <span className="px-4">Page {page} of {totalPages}</span>
                <IconButton onClick={goToFistPage} disabled={page === 1}>
                  <ChevronsLeft size={16} />
                </IconButton>
                <IconButton onClick={goToPrevPage} disabled={page === 1}>
                  <ChevronLeft size={16} />
                </IconButton>
                <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                  <ChevronRight size={16} />
                </IconButton>
                <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                  <ChevronsRight size={16} />
                </IconButton>

              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}
