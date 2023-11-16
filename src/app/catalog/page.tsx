import styles from './page.module.scss'
import FormSearch from '@/widgets/FormSearch/FormSearch'
import { URL_ENDPOINT } from '@/constants/constants'
import CardsList from '@/widgets/CardList/CardsList'
import OverviewProductModal from '@/components/OverviewProductModal/OverviewProductModal'

async function getCards() {
  const response = await fetch(URL_ENDPOINT, {
    cache: 'no-store'
  })
  return response.json()
}

export default async function Catalog() {
  const cards: { data: CardData[] } = await getCards()

  return (
    <>
      <h2 className={styles.title}>Каталог</h2>
      <FormSearch />
      <CardsList cards={cards.data} />
    </>
  )
}
