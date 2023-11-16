import { ButtonHTMLAttributes } from 'react'

interface CartProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  add: () => void
  remove: () => void
  added: boolean
}
