'use client'

import styles from './BurgerButton.module.scss'
import { clsx } from 'clsx'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { toggleMenu } from '@/store/features/mobileSlice'

export default function BurgerButton() {
  const menuOpened = useAppSelector(
    state => state.mobileMenu.isOpen
  )
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(toggleMenu())
  }

  return (
    <button
      className={clsx(styles.button, {
        [styles['button_active']]: menuOpened
      })}
      type="button"
      onClick={handleClick}
    >
      <span />
    </button>
  )
}
