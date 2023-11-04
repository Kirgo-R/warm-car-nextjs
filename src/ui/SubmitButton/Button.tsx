import styles from './Button.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { ButtonProps } from '@/types/props/ButtonProps'

export default function Button({
  value,
  type
}: ButtonProps) {
  return (
    <button
      className={`${tildaFont.className} ${styles.button}`}
      type={type}
    >
      {value}
    </button>
  )
}
