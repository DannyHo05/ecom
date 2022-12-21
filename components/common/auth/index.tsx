import { LayoutProps } from '@/models/common'
import React from 'react'

type Props = {}

export const Auth = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}