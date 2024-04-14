import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface TableCellProps extends ComponentProps<'td'>{
  condition?:boolean
}

export default function TableCell({condition,...props}: TableCellProps) {
  return (
/*   <td {...props} 
  className={ condition ? " flex flex-col text-zinc-300 py-3 px-4 text-sm gap-1" :
  "py-3 px-4 text-sm text-zinc-300" }/> */
  <td {...props} className={twMerge('py-3 px-4 text-sm text-zinc-300',props.className)}/>
  )
}
