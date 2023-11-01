import Checkbox from '@/ui/Checkbox/Checkbox'
import styles from './Agreement.module.scss'

export default function Agreement() {
  return (
    <div className={styles.wrapper}>
      <Checkbox />
      <p className={styles.text}>
        Согласен с политикой <span>конфиденциальности</span>
      </p>
    </div>
  )
}
