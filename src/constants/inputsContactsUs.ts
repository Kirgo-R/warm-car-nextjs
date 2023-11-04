import { IInput } from '@/models/IInput'

export const inputsContactUs: IInput[] = [
  {
    type: 'text',
    name: 'yourName',
    placeholder: 'Ваше имя'
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    placeholder: 'Номер телефона'
  },
  {
    type: 'text',
    name: 'city',
    placeholder: 'Город'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'E-mail'
  },
  {
    type: 'text',
    name: 'car',
    placeholder: 'Марка и модель автомобиля'
  }
]
