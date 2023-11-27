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
  openOverview,
  removeFromCart
} from '@/store/features/productsSlice'
import { SERVER_URL } from '@/constants/constants'

export default function OverviewProductModal() {
  const {
    overviewIsOpened,
    modalOverview,
    productsInCart
  } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()

  const isAdded =
    modalOverview !== null &&
    productsInCart.some(p => p.id === modalOverview.id)

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

  function handleClose() {
    dispatch(closeOverview())
  }

  const handleUpdateOverview = (
    updatedCartCounter: number
  ) => {
    if (modalOverview !== null) {
      dispatch(
        openOverview({
          ...modalOverview,
          cartCounter: updatedCartCounter
        })
      )
    }
  }

  function handleAddToCart() {
    if (modalOverview !== null) {
      dispatch(
        addProduct({
          id: modalOverview.id,
          imageUrl: modalOverview.imageUrl,
          alternativeText: modalOverview.alternativeText,
          model: modalOverview.model,
          mark: modalOverview.mark,
          year: modalOverview.year,
          price: modalOverview.price
        })
      )
      const updatedCartCounter =
        (modalOverview.cartCounter ?? 0) + 1
      handleUpdateOverview(updatedCartCounter)
    }
  }

  function handleRemoveFromCart() {
    if (modalOverview !== null) {
      dispatch(removeFromCart(modalOverview.id))
    }
  }

  function hadleIncrement() {
    if (modalOverview !== null) {
      dispatch(addProduct({ id: modalOverview.id }))
      const updatedCartCounter =
        (modalOverview.cartCounter ?? 0) + 1
      handleUpdateOverview(updatedCartCounter)
    }
  }

  function handleDecrement() {
    if (modalOverview !== null) {
      dispatch(decrementCart({ id: modalOverview.id }))
      const updatedCartCounter = Math.max(
        (modalOverview.cartCounter ?? 0) - 1,
        0
      )
      handleUpdateOverview(updatedCartCounter)
    }
  }

  let priceFormated: string = ''

  if (modalOverview !== null) {
    priceFormated = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2
    }).format(modalOverview.price)
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
              ? `Розничная цена ${priceFormated}`
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
            {!isAdded ? (
              <button
                className={`${tildaFont.className} ${styles['cart-button']}`}
                type="button"
                onClick={handleAddToCart}
              >
                Добавить в корзину
              </button>
            ) : (
              <button
                className={`${tildaFont.className} ${styles['cart-button']}`}
                type="button"
                onClick={handleRemoveFromCart}
              >
                Удалить из корзины
              </button>
            )}
            {isAdded ? (
              <div className={styles.counter}>
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
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
