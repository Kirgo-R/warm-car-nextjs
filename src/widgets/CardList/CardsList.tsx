import styles from './CardsList.module.scss'
import Card from '@/widgets/Card/Card'

export default function CardsList({
  cards
}: CardsListProps) {
  return (
    <ul className={styles.wrapper}>
      {cards.map(data => (
        <Card
          key={data.id}
          id={data.id}
          mark={data.attributes.mark}
          model={data.attributes.model}
          year={data.attributes.year}
          price={data.attributes.price}
          alternativeText={
            data.attributes.image.data.attributes
              .alternativeText
          }
          imageUrl={
            data.attributes.image.data.attributes.url
          }
        />
      ))}
    </ul>
  )
}
