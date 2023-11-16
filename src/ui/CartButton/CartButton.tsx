import styles from './CartButton.module.scss'
import { CartProps } from '@/models/props/CartProps'

export default function CartButton({
  add,
  remove,
  added
}: CartProps) {
  function handleClick() {
    if (!added) {
      add()
    } else {
      remove()
    }
  }

  return (
    <button className={styles.cart} onClick={handleClick}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="17.5"
          fill="#F5F5F5"
        />
        <path
          d="M12.0788 26.25C13.0768 26.25 13.8859 27.0591 13.8859 28.0571C13.8859 29.055 13.0768 29.8641 12.0788 29.8641C11.0808 29.8641 10.2717 29.055 10.2717 28.0571C10.2717 27.0591 11.0808 26.25 12.0788 26.25Z"
          stroke="#1C274C"
        />
        <path
          d="M22.9212 26.2501C23.9192 26.2501 24.7283 27.0591 24.7283 28.0572C24.7283 29.0552 23.9192 29.8643 22.9212 29.8643C21.9232 29.8643 21.1141 29.0552 21.1141 28.0572C21.1141 27.0591 21.9232 26.2501 22.9212 26.2501Z"
          stroke="#1C274C"
        />
        {!added ? (
          <path
            d="M16.2953 17.5761L17.6722 19.0218L21.1141 15.4077"
            stroke="#1C274C"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M16 20L21 15M21 20L16 15"
            stroke="#1C274C"
            strokeLinecap="round"
          />
        )}
        <path
          d="M5.45288 8.17938L5.76756 8.29002C7.3356 8.84131 8.11963 9.11696 8.56807 9.77319C9.01651 10.4294 9.01651 11.3011 9.01651 13.0444V16.3232C9.01651 19.867 9.0927 21.0364 10.1365 22.1374C11.1802 23.2383 12.8601 23.2383 16.22 23.2383H17.5M22.6084 23.2383C24.489 23.2383 25.4293 23.2383 26.0939 22.6966C26.7585 22.155 26.9484 21.2341 27.328 19.3922L27.9301 16.4711C28.3483 14.376 28.5573 13.3285 28.0225 12.6333C27.4878 11.9381 25.6604 11.9381 23.6305 11.9381H16.3236M9.01651 11.9381H11.4764"
          stroke="#1C274C"
          strokeLinecap="round"
        />
      </svg>
    </button>
  )
}
