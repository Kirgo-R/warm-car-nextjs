import Image from 'next/image'
import NavBar from '@/widgets/NavBar/NavBar'
import Link from 'next/link'
import logo from '@/assets/icons/logo.svg'
import styles from './Header.module.scss'
import BurgerButton from '@/ui/BurgerButton/BurgerButton'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src={logo}
          alt="Утеплители радиаторной решетки для автомобиля"
        />
      </Link>
      <NavBar />
      <BurgerButton />
    </header>
  )
}
