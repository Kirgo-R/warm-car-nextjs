import styles from './Select.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { SelectProps } from '@/models/props/SelectProps'

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
