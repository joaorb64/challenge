import React, { PropsWithChildren, ReactNode } from 'react'
import { JsxElement } from 'typescript'

export const Button = ({ children }: PropsWithChildren<{}>) => {
  return (
    <button className="p-2 px-8 border-solid border-x border-y border-very_light_gray shadow-sm rounded-md bg-white hover:scale-105 hover:shadow-md transition-all">
      {children}
    </button>
  )
}
