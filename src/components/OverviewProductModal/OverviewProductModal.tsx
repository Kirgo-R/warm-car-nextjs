'use client'

import styles from './OverviewProductModal.module.scss'
import Image from 'next/image'
import { useAppSelector } from '@/hooks/useAppSelector'
import { clsx } from 'clsx'
import Link from 'next/link'
import { useEffect } from 'react'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { tildaFont } from '@/assets/fonts/fonts'
import {
  addProduct,
  closeOverview,
  decrementCart,
  openOverview
} from '@/store/features/productsSlice'
import { SERVER_URL } from '@/constants/constants'

export default function OverviewProductModal() {
  const { overviewIsOpened, modalOverview } =
    useAppSelector(state => state.products)
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
  }, [overviewIsOpened, dispatch])

  const handleClose = () => {
    dispatch(closeOverview())
  }

  function hadleIncrement() {
    if (modalOverview !== null) {
      dispatch(addProduct({ id: modalOverview.id }))
      const updatedCartCounter =
        modalOverview.cartCounter !== undefined
          ? modalOverview.cartCounter + 1
          : 1
      dispatch(
        openOverview({
          ...modalOverview,
          cartCounter: updatedCartCounter
        })
      )
    }
  }

  function handleDecrement() {
    if (modalOverview !== null) {
      dispatch(decrementCart({ id: modalOverview.id }))
      const updatedCartCounter =
        modalOverview.cartCounter !== undefined
          ? modalOverview.cartCounter - 1
          : 1
      dispatch(
        openOverview({
          ...modalOverview,
          cartCounter: updatedCartCounter
        })
      )
    }
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
        {modalOverview ? (
          <Image
            src={`${SERVER_URL}${modalOverview.imageUrl}`}
            alt={`${modalOverview.alternativeText}`}
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
            {modalOverview !== null
              ? `Утеплитель радиатора для автомобиля ${modalOverview.mark} ${modalOverview.model} ${modalOverview.year}`
              : ''}
          </h2>
          <span className={styles.price}>
            {modalOverview !== null
              ? `Розничная цена ${modalOverview.price} руб.`
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
              {modalOverview !== null
                ? `В корзине ${modalOverview.cartCounter} шт.`
                : ''}
            </span>
            <div className={styles.spinbox}>
              <button
                className={styles['spinbox-button']}
                type="button"
                onClick={handleDecrement}
              >
                -
              </button>
              <span>/</span>
              <button
                className={styles['spinbox-button']}
                type="button"
                onClick={hadleIncrement}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
