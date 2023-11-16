'use client'
import styles from './Card.module.scss'
import Image from 'next/image'
import { SERVER_URL } from '@/constants/constants'
import CartButton from '@/ui/CartButton/CartButton'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import {
  addCart,
  closeOverview,
  loadCartFromLocalStorage,
  openOverview,
  removeCart
} from '@/store/features/productsSlice'
import {
  memo,
  useCallback,
  useEffect,
  useState
} from 'react'
import { AppDispatch } from '@/store/store'
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

  const handleAddToCart = useCallback(() => {
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
  }, [])

  const handleRemoveCart = useCallback(() => {
    dispatch(
      removeCart({
        id
      })
    )
    setIsAdded(false)
  }, [])

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
          style={{
            width: '100%',
            height: '100%',
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
