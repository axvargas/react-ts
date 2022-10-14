import { useState, ChangeEvent } from 'react';
export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  return {
    ...form,
    form,
    handleChange
  }
}