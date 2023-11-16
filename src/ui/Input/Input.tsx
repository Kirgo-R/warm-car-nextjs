import styles from './Input.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { InputProps } from '@/models/props/InputProps'

export default function Input({
  type,
  name,
  placeholder
}: InputProps) {
  return (
    <input
      className={`${tildaFont.className} ${styles.input}`}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  )
}
