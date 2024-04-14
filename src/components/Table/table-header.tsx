import { ComponentProps } from 'react'

interface TableHeaderProps extends ComponentProps<'th'> {
  propsStyle?: boolean
}

export default function TableHeader({ propsStyle, ...props }: TableHeaderProps) {
  return (
    <th {...props} className="py-3 px-4 text-sm font-semibold text-left" />
  )
}
