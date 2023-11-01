import styles from './TextArea.module.scss'
import { TextAreaProps } from '@/models/props/TextAreaProps'
import { tildaFont } from '@/assets/fonts/fonts'

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
