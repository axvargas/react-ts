import { useForm } from '../hooks/useForm';

interface FormData2 {
  postalCode: string;
  city: string;
}

const Form2 = () => {
  const { postalCode, city, form, handleChange } = useForm<FormData2>({
    postalCode: '123',
    city: 'NY'
  })
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Postal code:</label>
        <input 
          className="form-control" type="text" name="postalCode" 
          value={postalCode} onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">City:</label>
        <input 
          className="form-control" type="text" name="city" 
          value={city} onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}

export default Form2