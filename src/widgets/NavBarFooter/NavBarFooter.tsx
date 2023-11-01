'use client'

import Link from 'next/link'
import styles from './NavBarFooter.module.scss'
import { links } from '@/constants/links'
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

export default function NavBarFooter() {
  const pathname = usePathname()

  return (
    <nav>
      <ul className={styles.menu}>
        {links.map(link => (
          <li key={link.name}>
            <Link
              className={clsx(styles.link, {
                [styles.link_active]: pathname === link.href
              })}
              href={link.href}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
