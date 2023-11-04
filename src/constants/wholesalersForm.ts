import { IInput } from '@/models/IInput'

export const wholesalersForm: IInput[] = [
  {
    type: 'text',
    name: 'name',
    placeholder: 'Ваше имя'
  },
  {
    type: 'text',
    name: 'city',
    placeholder: 'Город'
  },
  {
    type: 'tel',
    name: 'phone',
    placeholder: 'Номер телефона'
  },
  {
    type: 'email',
    name: 'email',
    placeholder: 'E-mail'
  }
]
