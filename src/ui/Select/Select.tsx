import styles from './Select.module.scss'
import { tildaFont } from '@/assets/fonts/fonts'
import { SelectProps } from '@/models/props/SelectProps'

export default function Select({
  name,
  label,
  optionValues,
  onChange,
  values
}: SelectProps) {
  return (
    <select
      name={name}
      className={`${tildaFont.className} ${styles.select}`}
      value={values[name] || label}
      onChange={onChange}
    >
      <option value={label} label={label} />
      {optionValues.map(optionValue => (
        <option
          key={optionValue}
          value={optionValue}
          label={optionValue}
          className={styles.option}
        />
      ))}
    </select>
  )
}
