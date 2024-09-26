function Parent() {
  function handleSayHello() {
    console.log('Hello');
  }

  return <Child onSayHello={handleSayHello} />
}

function Child({ onSayHello }) {
  return (
      <button onClick={onSayHello}>Clique aqui</button>
  );
}