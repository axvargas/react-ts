import { useForm } from '../hooks/useForm';

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { email, name, age, form, handleChange } = useForm<FormData>({
    name: 'default',
    email: 'default@default.com',
    age: 22
  })
  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label" htmlFor="email">Email:</label>
        <input 
          className="form-control" type="email" name="email" 
          value={email} onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Name:</label>
        <input 
          className="form-control" type="text" name="name" 
          value={name} onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">Age:</label>
        <input 
          className="form-control" type="number" name="age" 
          value={age} onChange={handleChange}
        />
      </div>
      <pre>{JSON.stringify(form)}</pre>
    </form>
  )
}

export default Form