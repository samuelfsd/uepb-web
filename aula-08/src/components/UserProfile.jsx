import React, { useState } from 'react';

export function UserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Nome: {user.name}</p>
      <p>Idade: {user.age}</p>
    </div>
  );
}

