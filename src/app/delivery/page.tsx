import styles from './page.module.scss'
import Info from '@/components/DeliverySection/Info'
import { deliverySectionText } from '@/constants/deliverySectionText'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Доставка | WarmCar | Утеплители радиаторной решетки автомобиля'
}
export default function Delivery() {
  return (
    <>
      <h2 className={styles.title}>Доставка</h2>
      <section className={styles.section}>
        {deliverySectionText.map(section => (
          <Info
            title={section.title}
            paragraph={section.paragraph}
            list={section.list}
            key={section.title}
          />
        ))}
      </section>
    </>
  )
}
