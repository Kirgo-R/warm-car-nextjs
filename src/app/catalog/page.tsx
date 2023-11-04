import styles from './page.module.scss'
import FormSearch from '@/widgets/FormSearch/FormSearch'
import Card from '@/widgets/Card/Card'
import { CardData } from '@/types/Card'
import { URL_ENDPOINT } from '@/constants/constants'

async function getCards() {
  const response = await fetch(URL_ENDPOINT)
  return response.json()
}

export default async function Catalog() {
  const cardsData: { data: CardData[] } = await getCards()

  return (
    <>
      <h2 className={styles.title}>Каталог</h2>
      <FormSearch />
      <section className={styles.wrapper}>
        <ul className={styles.cards}>
          {cardsData.data.map(cards => (
            <Card cards={cards} key={cards.id} />
          ))}
        </ul>
      </section>
    </>
  )
}
