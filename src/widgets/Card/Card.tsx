import Image from 'next/image'
import { SERVER_URL } from '@/constants/constants'
import styles from './Card.module.scss'
import Link from 'next/link'
import { CardProps } from '@/types/props/CardProps'

export default function Card({ cards }: CardProps) {
  return (
    <li className={styles.card}>
      <figure className={styles['card-image']}>
        <Image
          src={`${SERVER_URL}${cards.attributes.image.data.attributes.url}`}
          alt={`${cards.attributes.image.data.attributes.alternativeText}`}
          style={{
            maxWidth: '100%',
            objectFit: 'cover',
            borderRadius: '6px 6px 0 0'
          }}
          width={310}
          height={200}
        />
        <figcaption className={styles.title}>
          {`${cards.attributes.mark} ${cards.attributes.model} ${cards.attributes.year}`}
        </figcaption>
      </figure>
      <article className={styles.prices}>
        <span className={styles.price}>
          {cards.attributes.price} руб.
        </span>
        <Link className={styles.price} href="/wholesalers">
          Узнать оптовую цену
        </Link>
      </article>
    </li>
  )
}
