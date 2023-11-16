'use client'
import styles from './Card.module.scss'
import Image from 'next/image'
import { SERVER_URL } from '@/constants/constants'
import CartButton from '@/ui/CartButton/CartButton'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import {
  addCart,
  loadCartFromLocalStorage,
  removeCart
} from '@/store/features/productsSlice'
import { useEffect, useState } from 'react'
import { AppDispatch } from '@/store/store'
import { useAppSelector } from '@/hooks/useAppSelector'

export default function Card({
  id,
  mark,
  model,
  year,
  price,
  alternativeText,
  imageUrl
}: CardProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { cart } = useAppSelector(state => state.products)
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    dispatch(loadCartFromLocalStorage())
  }, [dispatch])

  useEffect(() => {
    const isProductAdded = cart.some(
      product => product.id === id
    )
    setIsAdded(isProductAdded)
  }, [cart, id])

  function handleAddToCart() {
    dispatch(
      addCart({
        id,
        imageUrl,
        alternativeText,
        model,
        mark,
        year,
        price
      })
    )
    setIsAdded(true)
  }

  function handleRemoveCart() {
    dispatch(
      removeCart({
        id
      })
    )
    setIsAdded(false)
  }

  return (
    <li className={styles.card}>
      <figure className={styles['card-image']}>
        <Image
          src={`${SERVER_URL}${imageUrl}`}
          alt={`${alternativeText}`}
          style={{
            maxWidth: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer'
          }}
          width={310}
          height={200}
        />
        <figcaption className={styles.title}>
          {`${mark} ${model} ${year}`}
        </figcaption>
        <CartButton
          add={handleAddToCart}
          remove={handleRemoveCart}
          added={isAdded}
        />
      </figure>
      <article className={styles.prices}>
        <span className={styles.price}>{price} руб.</span>
        <Link className={styles.price} href="/wholesalers">
          Узнать оптовую цену
        </Link>
      </article>
    </li>
  )
}
