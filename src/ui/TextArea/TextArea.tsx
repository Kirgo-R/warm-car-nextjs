import styles from './TextArea.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { TextAreaProps } from '@/models/props/TextAreaProps'

export default function TextArea({
  name,
  placeholder
}: TextAreaProps) {
  return (
    <textarea
      className={`${tildaFont.className} ${styles.textarea}`}
      name={name}
      placeholder={placeholder}
    />
  )
}
