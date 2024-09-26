import React, { useEffect, useState } from 'react';

export function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setUser({name: 'Jose', age: 25})
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      {loading ? <p>carregando...</p> :
      (
        <div>
          <h1>Perfil do Usuário</h1>
          <p>Nome: {user.name}</p>
          <p>Idade: {user.age}</p>
        </div>
      )}
    </div>
  );
}

