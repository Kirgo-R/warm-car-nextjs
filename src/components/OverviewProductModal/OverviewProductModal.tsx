'use client'

import styles from './OverviewProductModal.module.scss'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/useAppSelector'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { tildaFont } from '@/assets/fonts/fonts'
import { closeOverview } from '@/store/features/productsSlice'
import { SERVER_URL } from '@/constants/constants'

export default function OverviewProductModal() {
  const { overviewIsOpened, product } = useAppSelector(
    state => state.products
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    const closeByEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        dispatch(closeOverview())
      }
    }
    if (overviewIsOpened) {
      document.addEventListener('keydown', closeByEsc)
      return () => {
        document.removeEventListener('keydown', closeByEsc)
      }
    }
  }, [overviewIsOpened])

  const handleClose = () => {
    dispatch(closeOverview())
  }

  return (
    <div
      className={clsx(styles.popup, {
        [styles['popup_opened']]: overviewIsOpened
      })}
      onClick={handleClose}
    >
      <section
        className={styles.wrapper}
        onClick={e => e.stopPropagation()}
      >
        {product ? (
          <Image
            src={`${SERVER_URL}${product.imageUrl}`}
            alt={`${product.alternativeText}`}
            style={{
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
              gridColumn: '1/2',
              gridRow: '1/4',
              borderRadius: '3px'
            }}
            width={600}
            height={600}
          />
        ) : (
          ''
        )}
        <div className={styles.info}>
          <h2 className={styles.title}>
            {product !== null
              ? `Утеплитель радиатора для автомобиля ${product.mark} ${product.model} ${product.year}`
              : ''}
          </h2>
          <span className={styles.price}>
            {product !== null
              ? `Розничная цена ${product.price} руб.`
              : ''}
          </span>
          <Link
            className={styles['wholesale-price']}
            href={'/wholesalers'}
            onClick={handleClose}
          >
            Кликните здесь чтобы узнать оптовую цену
          </Link>
          <div className={styles.cart}>
            <button
              className={`${tildaFont.className} ${styles['cart-button']}`}
            >
              Добавить в корзину
            </button>
            <span className={styles['cart-counter']}>
              {product !== null
                ? `В корзине ${product.cartCounter} шт.`
                : ''}
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
