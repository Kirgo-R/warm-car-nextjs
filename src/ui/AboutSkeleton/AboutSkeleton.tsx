import styles from './AboutSkeleton.module.scss'

export default function AboutSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}></div>
      <div className={styles.title}></div>

      <div className={styles.paragraph}></div>
    </div>
  )
}
