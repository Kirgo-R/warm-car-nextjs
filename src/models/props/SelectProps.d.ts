import { SelectHTMLAttributes } from 'react'

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  value: string
}
