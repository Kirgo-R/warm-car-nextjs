import styles from './Form.module.scss'
import React from 'react'
import FormProps from '@/types/props/FormProps'
import { clsx } from 'clsx'

export default function Form({
  children,
  name,
  title
}: FormProps) {
  return (
    <div
      className={clsx({
        [styles.wrapper]: name === 'contact-us',
        [styles['wrapper-wholesales']]:
          name === 'wholesalersForm'
      })}
    >
      <h2
        className={clsx({
          [styles.title]: name === 'contact-us',
          [styles['title-wholesales']]:
            name === 'wholesalersForm'
        })}
      >
        {title}
      </h2>
      <form
        className={clsx({
          [styles.form]: name === 'contact-us',
          [styles['form-wholesales']]:
            name === 'wholesalersForm'
        })}
        name={name}
      >
        {children}
      </form>
    </div>
  )
}
