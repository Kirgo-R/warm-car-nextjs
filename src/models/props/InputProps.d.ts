import { InputHTMLAttributes } from 'react'

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  type: string
  name: string
  placeholder: string
}
