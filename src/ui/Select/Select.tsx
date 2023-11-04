import styles from './Select.module.scss'
import { SelectProps } from '@/types/props/SelectProps'
import { tildaFont } from '@/assets/fonts/fonts'

export default function Select({
  name,
  label,
  value
}: SelectProps) {
  return (
    <select
      name={name}
      className={`${tildaFont.className} ${styles.select}`}
    >
      <option
        value={value}
        label={label}
        className={styles.option}
      />
    </select>
  )
}
