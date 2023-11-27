'use client'

import styles from './ProductInCart.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import {
  addProduct,
  decrementCart,
  removeFromCart
} from '@/store/features/productsSlice'

export default function ProductInCart({
  id,
  mark,
  model,
  year,
  price,
  counter,
  amount
}: ProductInCartProps) {
  const dispatch = useAppDispatch()

  const priceFormated = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(price)

  const amountFormated = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(amount)

  function handleIncrement() {
    dispatch(
      addProduct({
        id: id,
        model: model,
        mark: mark,
        year: year,
        price: price
      })
    )
  }

  function handleDecrement() {
    dispatch(decrementCart({ id: id }))
  }

  function handleRemove() {
    dispatch(removeFromCart(id))
  }

  return (
    <tr>
      <td
        className={styles['table-cell']}
      >{`${mark} ${model} ${year}`}</td>
      <td className={styles['table-cell']}>
        {priceFormated}
      </td>
      <td className={styles['table-cell']}>
        <button
          type="button"
          className={`${tildaFont.className} ${styles.changer}`}
          onClick={handleDecrement}
        >
          -
        </button>
        {counter}
        <button
          type="button"
          className={`${tildaFont.className} ${styles.changer}`}
          onClick={handleIncrement}
        >
          +
        </button>
      </td>
      <td className={styles['table-cell']}>
        {amountFormated}
      </td>
      <td className={styles['table-cell']}>
        <button
          type="button"
          className={`${tildaFont.className} ${styles.remove}`}
          onClick={handleRemove}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 44 44"
            fill="none"
          >
            <path
              d="M11.1268 32.5826L32.5827 11.1267M11.1268 11.1267L32.5827 32.5826"
              stroke="#474A51"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </td>
    </tr>
  )
}
