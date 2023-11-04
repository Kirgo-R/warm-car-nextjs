import styles from './page.module.scss'
import Info from '@/components/DeliverySection/Info'
import { wholesalersInfo } from '@/constants/wholesalersInfo'
import Form from '@/components/Form/Form'
import Input from '@/ui/Input/Input'
import TextArea from '@/ui/TextArea/TextArea'
import { wholesalersForm } from '@/constants/wholesalersForm'
import Checkbox from '@/ui/Checkbox/Checkbox'
import Agreement from '@/widgets/Agreement/Agreement'
import Button from '@/ui/SubmitButton/Button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title:
    'Оптовикам | WarmCar | Утеплители радиаторной решетки автомобиля'
}

export default function Wholesalers() {
  const { title, paragraph, list } = wholesalersInfo
  return (
    <>
      <h2 className={styles.title}>Оптовикам</h2>
      <section className={styles.section}>
        <Info
          title={title}
          paragraph={paragraph}
          list={list}
        />
        <Form
          name={'wholesalersForm'}
          title={'Оставить заявку на расчет опта'}
        >
          {wholesalersForm.map(input => (
            <Input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              key={input.name}
            />
          ))}
          <TextArea
            name={'wholesalers'}
            placeholder={
              'Введите в это поле интересующие модели и количество'
            }
          />
          <Agreement />
          <Button value={'Отправить'} type={'submit'} />
        </Form>
      </section>
    </>
  )
}
