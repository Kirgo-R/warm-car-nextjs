import Image from 'next/image'
import logo from '@/assets/icons/logo-place-footer.svg'
import styles from './Footer.module.scss'
import NavBarFooter from '@/widgets/NavBarFooter/NavBarFooter'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        className={styles.logo}
        src={logo}
        alt="Утеплители радиаторной решетки для автомобиля"
      />
      <NavBarFooter />
      <ul className={styles.contacts}>
        <li>
          <Link
            className={styles.contact}
            href="mailto: uteplitel54@yandex.ru"
          >
            uteplitel54@yandex.ru
          </Link>
        </li>
        <li>
          <Link
            className={styles.contact}
            href="tel: +79139878630"
          >
            +7 (913) 987-86-30
          </Link>
        </li>
      </ul>
      <Link
        className={styles.copyright}
        href="https://vk.com/kirgo_r"
      >
        ©️ 2023 KirGorWeb
      </Link>
    </footer>
  )
}
