import styles from './SubmitButton.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'

export default function SubmitButton() {
  return (
    <button
      className={`${tildaFont.className} ${styles.button}`}
      type="submit"
    >
      Отправить
    </button>
  )
}
