import styles from './FormSearch.module.scss'
import Select from '@/ui/Select/Select'
import { selects } from '@/constants/selects'
import Button from '@/ui/SubmitButton/Button'

export default function FormSearch() {
  return (
    <form className={styles.form}>
      <fieldset className={styles.selects}>
        {selects.map(select => (
          <Select
            name={select.name}
            label={select.label}
            value={select.value}
            key={select.name}
          />
        ))}
      </fieldset>
      <fieldset className={styles.buttons}>
        <Button type={'submit'} value={'Подобрать'} />
        <Button
          type={'button'}
          value={'Нет интересующей модели'}
        />
      </fieldset>
    </form>
  )
}
