'use client'
import styles from './CardsList.module.scss'
import Card from '@/widgets/Card/Card'
import { useAppSelector } from '@/hooks/useAppSelector'

export default function CardsList({
  cards
}: CardsListProps) {
  const { isResult, searchResult } = useAppSelector(
    state => state.filter
  )

  const displayedCards = !isResult ? cards : searchResult

  return (
    <ul className={styles.wrapper}>
      {displayedCards.map(cardData => (
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
