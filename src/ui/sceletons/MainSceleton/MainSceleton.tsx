import AboutSceleton from '@/ui/sceletons/AboutSceleton/AboutSceleton'
import FormSearchSceleton from '@/ui/sceletons/FormSearchSceleton/FormSearchSceleton'
import styles from './MainSceleton.module.scss'

export default function MainSceleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <div className={styles.image}></div>
      <AboutSceleton />
      <FormSearchSceleton />
      <AboutSceleton />
    </div>
  )
}
