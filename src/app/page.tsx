import styles from './page.module.scss'
import image from '@/assets/image/main-image.jpg'
import Image from 'next/image'
import About from '@/widgets/About/About'
import Form from '@/components/Form/Form'
import Input from '@/ui/Input/Input'
import TextArea from '@/ui/TextArea/TextArea'
import Agreement from '@/widgets/Agreement/Agreement'
import { aboutProduct, aboutUs } from '@/constants/articles'
import { inputsContactUs } from '@/constants/inputsContactsUs'
import Button from '@/ui/Button/Button'

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>
        WarmCar - утеплители радиаторной решетки для Вашего
        автомобиля.
      </h1>
      <Image
        src={image}
        alt="Утеплители радиаторной решетки автомобиля"
        priority
        style={{
          maxWidth: '100%',
          height: 'auto'
        }}
      />
      <About
        title={'О продукции'}
        paragraph={aboutProduct}
      />
      <Form title={'Связаться с нами'} name={'contact-us'}>
        {inputsContactUs.map(input => (
          <Input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            key={input.name}
          />
        ))}
        <TextArea
          name={'info'}
          placeholder={'Дополнительный комментарий'}
        />
        <Agreement />
        <Button value={'Отправить'} type={'submit'} />
      </Form>
      <About
        title={'О нашей компании'}
        paragraph={aboutUs}
      />
    </>
  )
}
