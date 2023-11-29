import { SelectHTMLAttributes } from 'react'

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  optionValues: string[]
  values: Record<string, string>
}
