import styles from './page.module.scss'
import FormSearch from '@/widgets/FormSearch/FormSearch'

export default function Catalog() {
  return (
    <>
      <h2 className={styles.title}>Каталог</h2>
      <FormSearch />
    </>
  )
}
