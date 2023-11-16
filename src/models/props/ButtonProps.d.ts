import { ButtonHTMLAttributes } from 'react'

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  type: 'button' | 'submit' | 'reset' | undefined
}
