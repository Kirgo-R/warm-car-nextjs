'use client'

import styles from './Checkbox.module.scss'
import React from 'react'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

export default function Checkbox() {
  const [isAgree, setIsAgree] =
    React.useState<boolean>(false)

  const pathname = usePathname()

  function handleChange() {
    setIsAgree(!isAgree)
  }

  return (
    <div className={styles.checkbox}>
      <input
        className={styles['checkbox__item']}
        name="checkbox"
        type="checkbox"
        onChange={() => handleChange()}
      />
      <span
        className={clsx([styles['checkbox__pseudo']], {
          [styles['checkbox__pseudo_disabled']]: !isAgree
        })}
      />
    </div>
  )
}
