import AboutSkeleton from '@/ui/AboutSkeleton/AboutSkeleton'
import FormContactUsSkeleton from '@/ui/FormContactUsSkeleton/FormContactUsSkeleton'
import styles from './MainSkeleton.module.scss'

export default function MainSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <div className={styles.image}></div>
      <AboutSkeleton />
      <FormContactUsSkeleton />
      <AboutSkeleton />
    </div>
  )
}
