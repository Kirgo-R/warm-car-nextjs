import AboutProps from '@/types/props/ApoutProps'
import styles from './About.module.scss'

export default function About({
  title,
  paragraph
}: AboutProps) {
  return (
    <section className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.paragraph}>{paragraph}</p>
    </section>
  )
}
