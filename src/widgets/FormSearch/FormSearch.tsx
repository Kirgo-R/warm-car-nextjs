'use client'
import styles from './FormSearch.module.scss'
import Select from '@/ui/Select/Select'
import Button from '@/ui/Button/Button'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@/hooks/useAppSelector'
import { FormEvent, useEffect } from 'react'
import {
  clearResult,
  getCardsList,
  setFilter,
  setMarks,
  setModels,
  setYears
} from '@/store/features/filterSlice'
import { useForm } from '@/hooks/useForm'

export default function FormSearch({
  cards
}: FormSearchProps) {
  const dispatch = useDispatch()
  const { marksList, selectsList, cardsList, modelsList } =
    useAppSelector(state => state.filter)
  const { values, handleChange, reset } = useForm()

  useEffect(() => {
    dispatch(getCardsList(cards))
  }, [cards, dispatch])

  useEffect(() => {
    if (cardsList) {
      dispatch(setMarks())
    }
  }, [cardsList, dispatch])

  useEffect(() => {
    if (marksList && values['mark']) {
      dispatch(setModels(values['mark']))
    }
  }, [marksList, dispatch, values])

  useEffect(() => {
    if (modelsList && values['model']) {
      dispatch(setYears(values['model']))
    }
  }, [dispatch, modelsList, values])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    dispatch(setFilter(values))
    dispatch(clearResult())
    reset({
      mark: '',
      model: '',
      year: ''
    })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.selects}>
        {selectsList.map(select => (
          <Select
            key={select.name}
            name={select.name}
            label={select.label}
            optionValues={select.uniqueOptions}
            onChange={handleChange}
            values={values}
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
