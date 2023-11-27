'use client'

import ProductInCart from '@/widgets/ProductInCart/ProductInCart'
import { useAppSelector } from '@/hooks/useAppSelector'
import styles from './CartList.module.scss'

export default function CartList() {
  const { productsInCart } = useAppSelector(
    state => state.products
  )

  const total = productsInCart.reduce(
    (acc, itm) => acc + itm.amount,
    0
  )

  const isEmpty = productsInCart.length <= 0

  const totalFormated = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 2
  }).format(total)

  return isEmpty ? (
    <h3 className={styles.cartEmptyTitle}>
      В корзине нет товаров
    </h3>
  ) : (
    <table className={styles.table}>
      <caption className={styles.caption}>
        Список выбранных товаров
      </caption>
      <thead>
        <tr>
          <th className={styles.heading}>Модель</th>
          <th className={styles.heading}>Цена</th>
          <th className={styles.heading}>Количество</th>
          <th className={styles.heading}>Стоимость</th>
          <th className={styles.heading}></th>
        </tr>
      </thead>
      <tbody>
        {productsInCart.map(product => (
          <ProductInCart
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            alternativeText={product.alternativeText}
            mark={product.mark}
            model={product.model}
            year={product.year}
            price={product.price}
            counter={product.cartCounter}
            amount={product.amount}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className={styles.sum} colSpan={3}>
            Выбран(о) 1 товар(ов) на сумму:
          </td>
          <td className={styles.sum}>{totalFormated}</td>
        </tr>
      </tfoot>
    </table>
  )
}
