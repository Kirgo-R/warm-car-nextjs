import styles from './Form.module.scss'
import React from 'react'
import FormProps from '@/models/props/FormProps'

export default function Form({
  children,
  name,
  title
}: FormProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <form className={styles.form} name={name}>
        {children}
      </form>
    </div>
  )
}
