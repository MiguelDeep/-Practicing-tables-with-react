import {  ComponentProps } from 'react'

interface LinksProps extends ComponentProps<'a'>  {
  children : string; 
}


export default function Links(props : LinksProps) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-300" > {props.children}</a>
  )
}
