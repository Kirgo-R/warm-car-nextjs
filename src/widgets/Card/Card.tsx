'use client'
import styles from './Card.module.scss'
import Image from 'next/image'
import { SERVER_URL } from '@/constants/constants'
import CartButton from '@/ui/CartButton/CartButton'
import Link from 'next/link'
import {
  addProduct,
  openOverview,
  removeFromCart
} from '@/store/features/productsSlice'
import { memo, useEffect, useState } from 'react'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { useAppSelector } from '@/hooks/useAppSelector'

export default memo(function Card({
  id,
  mark,
  model,
  year,
  price,
  alternativeText,
  imageUrl
}: CardProps) {
  const dispatch = useAppDispatch()
  const { productsInCart } = useAppSelector(
    state => state.products
  )
  const isAdded = productsInCart.some(p => p.id === id)

  function handleAddToCart() {
    dispatch(
      addProduct({
        id: id,
        imageUrl: imageUrl,
        alternativeText: alternativeText,
        model: model,
        mark: mark,
        year: year,
        price: price
      })
    )
  }

  function handleRemoveCart() {
    dispatch(removeFromCart(id))
  }

  function handleOpenProduct() {
    dispatch(
      openOverview({
        id: id,
        imageUrl: imageUrl,
        alternativeText: alternativeText,
        model: model,
        mark: mark,
        year: year,
        price: price
      })
    )
  }

  return (
    <li className={styles.card}>
      <figure className={styles['card-image']}>
        <Image
          src={`${SERVER_URL}${imageUrl}`}
          alt={`${alternativeText}`}
          priority={true}
          style={{
            maxWidth: '100%',
            maxHeight: 'auto',
            objectFit: 'cover',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer'
          }}
          width={310}
          height={200}
          onClick={handleOpenProduct}
        />
        <figcaption
          className={styles.title}
          onClick={handleOpenProduct}
        >
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
})
