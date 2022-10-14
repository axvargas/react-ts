import { useState } from 'react';

interface AppUser {
  uid: string;
  name: string;
}

const tmpAppUser: AppUser= {
  uid: 'ABC123',
  name: 'Pirobo'
}

const User = () => {
  const [user, setUser] = useState<AppUser>()

  const login = () =>{
    setUser(tmpAppUser)
  }
  
  return (
    <div>
      <h3>User</h3>
      <button
        className='btn btn-outline-primary'
        onClick={login}
      > Login </button>
      {
        !user 
          ? <pre>There is no user</pre>
          : <pre> {JSON.stringify(user)} </pre>
      }
      
    </div>
  )
}

export default User