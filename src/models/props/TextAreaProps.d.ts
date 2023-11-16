import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string
  placeholder: string
}
