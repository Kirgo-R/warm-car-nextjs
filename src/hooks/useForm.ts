import React, { useState } from 'react'

export function useForm() {
  const [values, setValues] = useState<IFormValues>({
    mark: '',
    model: '',
    year: ''
  })

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const target = event.target
    const value = target.value
    const name = target.name as keyof IFormValues
    setValues({ ...values, [name]: value })
  }

  const reset = (
    data: IFormValues = { mark: '', model: '', year: '' }
  ): void => {
    setValues(data)
  }

  return { values, handleChange, setValues, reset }
}
