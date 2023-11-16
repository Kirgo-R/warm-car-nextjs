import styles from './CatalogSkeleton.module.scss'
import FormSearchSkeleton from '@/ui/FormSearchSkeleton/FormSearchSkeleton'
import CardListSkeleton from '@/ui/CardListSkeleton/CardListSkeleton'

export default function CatalogSkeleton() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}></div>
      <div className={styles.title}></div>
      <FormSearchSkeleton />
      <CardListSkeleton />
    </div>
  )
}
