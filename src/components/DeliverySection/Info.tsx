import { InfoProps } from '@/types/props/InfoProps'
import styles from './Info.module.scss'

export default function Info({
  title,
  paragraph,
  list
}: InfoProps) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.paragraph}>{paragraph}</p>
      <ul className={styles.list}>
        {list.map(listItem => (
          <li
            key={listItem}
            className={styles['list-item']}
          >
            {listItem}
          </li>
        ))}
      </ul>
    </div>
  )
}
