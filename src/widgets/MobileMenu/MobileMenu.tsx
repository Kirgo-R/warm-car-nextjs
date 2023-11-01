'use client'

import Link from 'next/link'
import styles from './MobileMenu.module.scss'
import { links } from '@/constants/links'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { closePopup } from '@/store/features/mobileSlice'
import { useEffect } from 'react'
import { useResize } from '@/hooks/useResize'

export default function MobileMenu() {
  const menuOpened = useAppSelector(
    state => state.mobileMenu.isOpen
  )
  const dispatch = useAppDispatch()

  const pathname = usePathname()
  const { isScreenMobile } = useResize()

  useEffect(() => {
    !isScreenMobile && dispatch(closePopup())
  }, [isScreenMobile])

  function handleClose() {
    dispatch(closePopup())
  }

  return (
    <nav
      className={clsx(styles.popup, {
        [styles.opened]: menuOpened
      })}
    >
      <ul className={styles.menu}>
        {links.map(link => (
          <li key={link.name}>
            <Link
              className={clsx(styles.link, {
                [styles.link_active]: pathname === link.href
              })}
              href={link.href}
              onClick={handleClose}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
