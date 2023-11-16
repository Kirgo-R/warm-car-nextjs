import styles from './page.module.scss'
import { Metadata } from 'next'
import CartList from '@/components/CartList/CartList'

export const metadata: Metadata = {
  title:
    'Корзина | WarmCar | Утеплители радиаторной решетки автомобиля'
}
export default function Cart() {
  return (
    <>
      <h2 className={styles.title}>Корзина</h2>
      <CartList />
    </>
  )
}
