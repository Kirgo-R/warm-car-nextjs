'use client'

import styles from './CardsList.module.scss'
import Card from '@/widgets/Card/Card'

export default function CardsList({
  cards
}: CardsListProps) {
  return (
    <ul className={styles.wrapper}>
      {cards.map(cardData => (
        <Card
          key={cardData.id}
          id={cardData.id}
          mark={cardData.attributes.mark}
          model={cardData.attributes.model}
          year={cardData.attributes.year}
          price={cardData.attributes.price}
          alternativeText={
            cardData.attributes.image.data.attributes
              .alternativeText
          }
          imageUrl={
            cardData.attributes.image.data.attributes.url
          }
        />
      ))}
    </ul>
  )
}
